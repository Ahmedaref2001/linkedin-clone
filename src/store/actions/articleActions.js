import * as actions from "./actionsType";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "../../firebase";
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";

export const fetchArticle = (article) => {
    return {
        type: actions.FETCH_ARTICLE,
        payload: article,
    };
};

export const setArticleLoading = (flag) => {
    return {
        type: actions.SET_ARTICLE_LOADING,
        payload: flag,
    };
};

export const setArticleError = (error) => {
    return {
        type: actions.SET_ARTICLE_ERROR,
        payload: error,
    };
};

// Handle add post
export const addPostAPI = (postData) => {
    return async (dispatch) => {
        dispatch(setArticleLoading(true));

        try {
            let imgURL = postData.image ? await uploadImage(postData.image) : postData.image;

            const collRef = collection(db, "articles");
            await addDoc(collRef, {
                actor: {
                    email: postData.user.email,
                    name: postData.user.displayName,
                    date: postData.timestamp,
                    image: postData.user.photoURL,
                },
                comments: 0,
                video: postData.video,
                description: postData.description,
                imgURL: imgURL,
            });
        } catch (error) {
            dispatch(setArticleError(error.message));
        } finally {
            dispatch(setArticleLoading(false));
        }
    };
};

const uploadImage = (image) => {
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadRef = uploadBytesResumable(storageRef, image);

        uploadRef.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                console.log(progress);
            },
            (error) => {
                reject(error);
            },
            async () => {
                try {
                    const downloadURL = await getDownloadURL(uploadRef.snapshot.ref);
                    resolve(downloadURL);
                } catch (error) {
                    reject(error);
                }
            }
        );
    });
};


export const getPostsAPI=()=>{
    return async(dispatch)=>{
        dispatch(setArticleLoading(true));
        let postsData;
        const collRef = collection(db, "articles");
        const orderedPosts=query(collRef,orderBy("actor.date","desc"))
        onSnapshot(orderedPosts,(snapshot)=>{
            postsData=snapshot.docs.map((doc)=>doc.data())
            dispatch(fetchArticle(postsData))
            dispatch(setArticleLoading(false));
        })
    }
}
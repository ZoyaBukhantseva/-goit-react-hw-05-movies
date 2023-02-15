// import { useState, useEffect, useCallback } from "react";

// // import Modal from "../../shared/components/Modal/Modal";

// // import PostsSearchForm from "./PostsSearchForm/PostsSearchForm";
// // import PostsSearchList from "./PostsSearchList/PostsSearchList";
// // import PostDetails from "./PostDetails/PostDetails";

// // import { searchPosts } from "../../shared/services/posts-api";

// // import styles from "./posts-search.module.scss";

// const MovieSearch = () => {
//     const [search, setSearch] = useState("");
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [page, setPage] = useState(1);
//     const [showModal, setShowModal] = useState(false);
//     const [postDetails, setPostDetails] = useState(null);

//     useEffect(() => {
//         if (!search) {
//             return;
//         }

//         const fetchPosts = async () => {
//             try {
//                 setLoading(true);
//                 const data = await searchPosts(search, page);
//                 setItems(prevItems => ([...prevItems, ...data]));
//             }
//             catch (error) {
//                 setError(error.message);
//             }
//             finally {
//                 setLoading(false);
//             }
//         }
//         fetchPosts();

//     }, [search, page, setLoading, setItems, setError, setLoading, searchPosts])

//     const onSearchPosts = useCallback(({ search }) => {
//         setSearch(search);
//         setItems([]);
//         setPage(1);
//     }, []);

//     const showPost = useCallback((data) => {
//         setPostDetails(data);
//         setShowModal(true);
//     }, []);

//     const loadMore = useCallback(() => {
//         setPage(prevPage => prevPage + 1)
//     }, []);

//     const closeModal = useCallback(() => {
//         setShowModal(false);
//         setPostDetails(null);
//     }, []);

//     return (
//         <>
//             <PostsSearchForm onSubmit={onSearchPosts} />
//             <PostsSearchList items={items} showPost={showPost} />
//             {error && <p className={styles.errorMessage}>{error}</p>}
//             {loading && <p>...Load posts</p>}
//             {Boolean(items.length) && <button onClick={loadMore}>Load more</button>}
//             {showModal && <Modal close={closeModal}>
//                 <PostDetails {...postDetails} />
//             </Modal>}
//         </>
//     )
// }

// export default PostsSearch;
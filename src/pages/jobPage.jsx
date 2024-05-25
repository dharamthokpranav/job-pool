// import React from "react";
// import { useParams } from "react-router-dom";

// const JobPageNew = () => {
//   const { id } = useParams();
//   // const [job, setJob] = useState(null);
//   // const [loading, setLoading] = useState(true);

//   //   useEffect(() => {
//   //     const fetchJob = async () => {
//   //       try {
//   //         const res = await fetch(`/api/jobs/${id}`);
//   //         const data = await res.json();
//   //         setJob(data);
//   //       } catch (error) {
//   //         console.log("Error fetching data ", error);
//   //       } finally {
//   //         setLoading(false);
//   //       }
//   //     };
//   //     fetchJob();
//   //   }, []);
//   //   return loading ? <Spinner /> : <h1>{job.title}</h1>;
//   // };

//   const jobLoader = async ({ params }) => {
//     const res = await fetch(`/api.jobs/${params.id}`);
//     const data = await res.json();
//     return data;
//   };
// };
// export { JobPageNew as default, jobLoader };

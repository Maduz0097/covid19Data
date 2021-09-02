import axios from "axios";
import React from "react";

import "./index.css";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const baseURL = "https://www.hpb.health.gov.lk/api/get-current-statistical";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
   <div className="row">
     <div><h1>Daily corona report<span> of {post.data.update_date_time}</span></h1></div>
     <div className="col-lg-6 col-sm-12">
      <h2 className="land">In sri lanka</h2>
      <h2>new local cases :{post.data.local_new_cases}</h2>
      <h2>number of individuals in hospitals:{post.data.local_total_number_of_individuals_in_hospitals}</h2>
      <h2>local deaths :{post.data.local_deaths}</h2>
      <h2>new local deaths :{post.data.local_new_deaths}</h2>
     </div>
      <div className="col-lg-6 col-sm-12">
        <h2 className="land">In the world</h2>
      <h2>Global deaths :{post.data.global_deaths}</h2>
      <h2>New global deaths :{post.data.global_new_deaths}</h2>
      <h2>New global cases :{post.data.global_new_cases}</h2>
      <h2>Total global deaths :{post.data.global_total_cases}</h2>
      <h2>Global recoverd persons :{post.data.global_recovered}</h2>
      </div>
      <div className="col-lg-6 col-sm-12">
      <h2>Total PCR testing :{post.data.total_pcr_testing_count}</h2>
      </div>
    </div>
  );
}
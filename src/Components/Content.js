import React from 'react';
import { Container } from "react-bootstrap";
import Userdata from './../userdata.json';
// import { Bar} from 'react-chartjs-2';
// import { CategoryScale, LinearScale } from 'chart.js';
// import { Chart } from 'chart.js';

function Content() {
   // Chart.register(CategoryScale, LinearScale);
   // const data = {
   //    labels: [
   //      'M1: Improper Platform Usage',
   //      'M2: Insecure Data Storage',
   //      'M3: Insecure Communication',
   //      'M5: Insufficient Cryptography',
   //      'M7: Client Code Quality',
   //      'M6: Insecure Authorization',
   //      'M10: Extraneous Functionality',
   //    ],
   //    datasets: [
   //      {
   //        label: 'OWASPdistribution',
   //        data: [3, 1, 1, 2, 1, 1, 1],
   //        backgroundColor: [
   //          'rgba(255, 99, 132, 0.6)', // M1
   //          'rgba(54, 162, 235, 0s.6)', // M2
   //          'rgba(255, 206, 86, 0.6)', // M3
   //          'rgba(75, 192, 192, 0.6)', // M5
   //          'rgba(153, 102, 255, 0.6)', // M7
   //          'rgba(255, 159, 64, 0.6)', // M6
   //          'rgba(255, 99, 132, 0.6)', // M10
   //        ],
   //      },
   //    ],
   //  };

   return (
      <div>
         <section class="">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="Images/img.jpeg" alt="First slide" style={{ height: "auto" }} />
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100 " src="Images/img.jpeg" alt="Second slide" style={{ height: "auto" }} />
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100" src="Images/img.jpeg" alt="Third slide" style={{ height: "auto" }} />
                  </div>
               </div>
            </div>
         </section>

         <section class="bg-light" id="about">
            <div class="container">
               <div class="row">
                  <div class="col-sm-12 col-md-12">
                     <h3 class="text-center mt-4 text-secondary">Know about us</h3>
                  </div>
               </div>
               <div class="row">
                  <p class="mt-4 mb-5">CDAC (Centre for Development of Advanced Computing) is a premier research and development
                     organization located in Hyderabad, India. It is a part of the Ministry of Electronics and Information Technology,
                     Government of India. CDAC focuses on various aspects of advanced computing and is involved in cutting-edge research,
                     development, and deployment of technologies in areas such as high-performance computing, software technologies,
                     cybersecurity, artificial intelligence, and more. The organization collaborates with industry, academia,
                     and government institutions to address technological challenges and promote innovation in the field of advanced computing.
                     CDAC Hyderabad plays a significant role in contributing to India's digital transformation and technological advancements.</p>
               </div>
            </div>
         </section>

         <section class="" id="destinations">
            <div className="row">
               <div className="col-sm-8">
                  <h3 className="mt-3">Analyzed APK</h3>
                  <table className="table table-striped table-bordered custom-table">
                     <thead className="thead-light">
                        <tr>
                           <th scope="col">Sr. No.</th>
                           <th scope="col">Name</th>
                           <th scope="col">Time</th>
                        </tr>
                     </thead>
                     <tbody>
                        {Userdata.map((users, index) => (
                           <tr key={index} className="table-row">
                              <td>{index + 1}</td>
                              <td>{users.name}</td>
                              <td>{users.analysis_status}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </section>


         <section class="" id="places">
            <div class="container">
               <div class="col-sm-12 col-md-12 mb-4">
                  <h3 class="text-center text-secondary mt-4">Fetched Data from json</h3>
               </div>

               <div>
                  <div className="row">
                     <div className="col-sm-8">
                        <h3 className="mt-3">Analyzed APK</h3>
                        <table className="table table-striped table-bordered custom-table">
                           <thead className="thead-light">
                              <tr>

                                 <th scope="col">ID</th>
                                 <th scope="col">NAME</th>
                                 <th scope="col">Sha256sum</th>
                                 <th scope="col">MD5</th>
                                 <th scope="col">ANALYSIS STATUS</th>
                              </tr>
                           </thead>
                           <tbody>
                              {Userdata.map((users, index) => (
                                 <tr key={index} className="table-row">

                                    <td>{users.id}</td>
                                    <td>{users.name}</td>
                                    <td>{users.sha256sum}</td>
                                    <td>{users.md5sum}</td>
                                    <td>{users.analysis_status}</td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </section>


         <section class="bg-light mt-5" id="tourist">
            <div>
               <h2>Chart Section</h2>


            </div>
         </section>
      </div>
   );
}

export default Content;
import React from "react"
import '../components/contact.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/footer.css'
import GoogleMap from "../components/maps"
import MapContainer from "../components/maps2"

const Contact = () => (
  <Layout>
    <div className="contact">




    <div className="lefto">
        <h2 className="title">
      <svg className="yellows" width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="10" fill="#F2DC17"/>
      </svg>
      NOUS CONTACTER</h2>

      <p className="desc">
      Vous pouvez contacter le Cabinet au <span className="bold"> 0640843619 </span>, par mail à l’adresse suivante : <span className="bold"> qmameri.avocat@gmail.com </span>  ou par le formulaire de contact ci-joint.
      Le Cabinet de Me Quentin MAMERI se situe près du  Palais de Justice de Paris , au <span className="bold"> 16 rue Sauffroy, 75017 PARIS. </span></p>

      <p className="high-m" > <svg width="48" height="21" viewBox="0 0 48 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10.5" cy="10.5" r="9.5" stroke="#244C82" stroke-width="2"/>
  <path d="M5.148 5.088H7.836L10.482 12.032L13.156 5.088H15.816V15H14.136V6.768H14.108L11.098 15H9.866L6.856 6.768H6.828V15H5.148V5.088Z" fill="#0D345D"/>
  <circle cx="37.5" cy="10.5" r="10.5" fill="#91F2F9"/>
  <path d="M32.8521 7.07L30.9901 8.792L30.0101 7.63L33.0061 5.138H34.5321V15.05H32.8521V7.07ZM39.0933 9.128H39.5273C39.7699 9.128 40.0033 9.114 40.2273 9.086C40.4606 9.058 40.6659 8.99734 40.8433 8.904C41.0299 8.81067 41.1793 8.67534 41.2913 8.498C41.4033 8.32067 41.4593 8.08267 41.4593 7.784C41.4593 7.40134 41.3286 7.08867 41.0673 6.846C40.8059 6.60334 40.4653 6.482 40.0453 6.482C39.7093 6.482 39.4059 6.58 39.1353 6.776C38.8739 6.96267 38.6826 7.22867 38.5613 7.574L36.7833 7.098C36.8953 6.734 37.0539 6.41667 37.2593 6.146C37.4646 5.87534 37.7073 5.656 37.9873 5.488C38.2673 5.31067 38.5753 5.18 38.9113 5.096C39.2473 5.012 39.5973 4.97 39.9613 4.97C40.3906 4.97 40.7966 5.026 41.1793 5.138C41.5619 5.25 41.8979 5.418 42.1873 5.642C42.4766 5.85667 42.7053 6.132 42.8733 6.468C43.0506 6.79467 43.1393 7.17734 43.1393 7.616C43.1393 8.148 42.9899 8.624 42.6913 9.044C42.3926 9.45467 41.9773 9.72534 41.4453 9.856V9.884C42.0799 9.97734 42.5606 10.248 42.8873 10.696C43.2139 11.144 43.3773 11.676 43.3773 12.292C43.3773 12.768 43.2839 13.188 43.0973 13.552C42.9199 13.916 42.6773 14.224 42.3693 14.476C42.0613 14.7187 41.7019 14.9053 41.2913 15.036C40.8899 15.1573 40.4699 15.218 40.0313 15.218C39.6206 15.218 39.2333 15.1713 38.8693 15.078C38.5053 14.994 38.1739 14.8587 37.8753 14.672C37.5859 14.4853 37.3339 14.2473 37.1193 13.958C36.9046 13.6593 36.7413 13.3047 36.6293 12.894L38.4213 12.418C38.5239 12.8287 38.7059 13.146 38.9673 13.37C39.2286 13.594 39.5833 13.706 40.0313 13.706C40.2553 13.706 40.4653 13.6687 40.6613 13.594C40.8666 13.5193 41.0439 13.4167 41.1933 13.286C41.3519 13.146 41.4733 12.9827 41.5573 12.796C41.6506 12.6 41.6973 12.3853 41.6973 12.152C41.6973 11.8347 41.6273 11.578 41.4873 11.382C41.3566 11.1767 41.1839 11.0227 40.9693 10.92C40.7639 10.808 40.5306 10.7333 40.2693 10.696C40.0079 10.6587 39.7513 10.64 39.4993 10.64H39.0933V9.128Z" fill="black"/>
  </svg>
  Brochant
  </p>
</div>

 <div className="righto">
<GoogleMap />
</div>


    </div>

  </Layout>
)

export default Contact;

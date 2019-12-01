import React from "react"
import "../components/contact.css"
import Layout from "../components/layout"
import VisitCard from "../components/VisitCard"
import GoogleMap from "../components/maps"
import pic3 from "../images/trains.png"

const Contact = () => (
  <Layout>
    <div className="background-hono">
      <div className="bigbox">
        <div className="bleft">
          <h1> CONTACT ET ACCÈS </h1>
          <p className="desc">
            {" "}
            Dès le premier contact, Me MAMERI procédera à une première
            évaluation de votre situation pour vérifier si votre affaire
            s’intègre bien dans le champ de compétence de son Cabinet et vous
            conviendrez ensemble d’un premier rendez-vous. Chaque affaire étant
            particulière, ce premier rendez-vous est essentiel pour que Me
            MAMERI puisse vous rencontrer, prendre connaissance des pièces du
            dossier et vous proposer une stratégie personnalisée.
          </p>
          <h2 className="title">
            {" "}
            <svg
              className="yellows"
              width="15"
              height="15"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="10" height="10" fill="#F2DC17" />
            </svg>{" "}
            SI VOUS VENEZ EN TRANSPORT{" "}
          </h2>
          <p className="desc">
            <svg
              className="metro"
              width="48"
              height="21"
              viewBox="0 0 48 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10.5"
                cy="10.5"
                r="9.5"
                stroke="#244C82"
                stroke-width="2"
              />
              <path
                d="M5.148 5.088H7.836L10.482 12.032L13.156 5.088H15.816V15H14.136V6.768H14.108L11.098 15H9.866L6.856 6.768H6.828V15H5.148V5.088Z"
                fill="#0D345D"
              />
              <circle cx="37.5" cy="10.5" r="10.5" fill="#91F2F9" />
              <path
                d="M32.8521 7.07L30.9901 8.792L30.0101 7.63L33.0061 5.138H34.5321V15.05H32.8521V7.07ZM39.0933 9.128H39.5273C39.7699 9.128 40.0033 9.114 40.2273 9.086C40.4606 9.058 40.6659 8.99734 40.8433 8.904C41.0299 8.81067 41.1793 8.67534 41.2913 8.498C41.4033 8.32067 41.4593 8.08267 41.4593 7.784C41.4593 7.40134 41.3286 7.08867 41.0673 6.846C40.8059 6.60334 40.4653 6.482 40.0453 6.482C39.7093 6.482 39.4059 6.58 39.1353 6.776C38.8739 6.96267 38.6826 7.22867 38.5613 7.574L36.7833 7.098C36.8953 6.734 37.0539 6.41667 37.2593 6.146C37.4646 5.87534 37.7073 5.656 37.9873 5.488C38.2673 5.31067 38.5753 5.18 38.9113 5.096C39.2473 5.012 39.5973 4.97 39.9613 4.97C40.3906 4.97 40.7966 5.026 41.1793 5.138C41.5619 5.25 41.8979 5.418 42.1873 5.642C42.4766 5.85667 42.7053 6.132 42.8733 6.468C43.0506 6.79467 43.1393 7.17734 43.1393 7.616C43.1393 8.148 42.9899 8.624 42.6913 9.044C42.3926 9.45467 41.9773 9.72534 41.4453 9.856V9.884C42.0799 9.97734 42.5606 10.248 42.8873 10.696C43.2139 11.144 43.3773 11.676 43.3773 12.292C43.3773 12.768 43.2839 13.188 43.0973 13.552C42.9199 13.916 42.6773 14.224 42.3693 14.476C42.0613 14.7187 41.7019 14.9053 41.2913 15.036C40.8899 15.1573 40.4699 15.218 40.0313 15.218C39.6206 15.218 39.2333 15.1713 38.8693 15.078C38.5053 14.994 38.1739 14.8587 37.8753 14.672C37.5859 14.4853 37.3339 14.2473 37.1193 13.958C36.9046 13.6593 36.7413 13.3047 36.6293 12.894L38.4213 12.418C38.5239 12.8287 38.7059 13.146 38.9673 13.37C39.2286 13.594 39.5833 13.706 40.0313 13.706C40.2553 13.706 40.4653 13.6687 40.6613 13.594C40.8666 13.5193 41.0439 13.4167 41.1933 13.286C41.3519 13.146 41.4733 12.9827 41.5573 12.796C41.6506 12.6 41.6973 12.3853 41.6973 12.152C41.6973 11.8347 41.6273 11.578 41.4873 11.382C41.3566 11.1767 41.1839 11.0227 40.9693 10.92C40.7639 10.808 40.5306 10.7333 40.2693 10.696C40.0079 10.6587 39.7513 10.64 39.4993 10.64H39.0933V9.128Z"
                fill="black"
              />
            </svg>
            station Brochant
          </p>
          <p className="desc ">
            {" "}
            <svg
              className="metro"
              width="51"
              height="23"
              viewBox="0 0 51 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11.5"
                cy="11.5"
                r="10.5"
                stroke="#244C82"
                stroke-width="2"
              />
              <circle
                cx="39.5"
                cy="11.5"
                r="10.5"
                stroke="#ECDC49"
                stroke-width="2"
              />
              <path
                d="M41.91 8.412C41.546 8.02 41.1913 7.75867 40.846 7.628C40.51 7.49733 40.1693 7.432 39.824 7.432C39.3107 7.432 38.844 7.52533 38.424 7.712C38.0133 7.88933 37.6587 8.14133 37.36 8.468C37.0613 8.78533 36.828 9.15867 36.66 9.588C36.5013 10.0173 36.422 10.4793 36.422 10.974C36.422 11.506 36.5013 11.996 36.66 12.444C36.828 12.892 37.0613 13.2793 37.36 13.606C37.6587 13.9327 38.0133 14.1893 38.424 14.376C38.844 14.5627 39.3107 14.656 39.824 14.656C40.2253 14.656 40.6127 14.5627 40.986 14.376C41.3687 14.18 41.7233 13.872 42.05 13.452L43.506 14.488C43.058 15.104 42.512 15.552 41.868 15.832C41.224 16.112 40.538 16.252 39.81 16.252C39.0447 16.252 38.34 16.1307 37.696 15.888C37.0613 15.636 36.5107 15.286 36.044 14.838C35.5867 14.3807 35.2273 13.8347 34.966 13.2C34.7047 12.5653 34.574 11.8607 34.574 11.086C34.574 10.2927 34.7047 9.574 34.966 8.93C35.2273 8.27667 35.5867 7.72133 36.044 7.264C36.5107 6.80667 37.0613 6.45667 37.696 6.214C38.34 5.962 39.0447 5.836 39.81 5.836C40.482 5.836 41.1027 5.95733 41.672 6.2C42.2507 6.43333 42.7873 6.83467 43.282 7.404L41.91 8.412Z"
                fill="#ECDC49"
              />
              <path
                d="M3.711 8.628H5.925C6.231 8.628 6.525 8.658 6.807 8.718C7.095 8.772 7.35 8.868 7.572 9.006C7.794 9.144 7.971 9.33 8.103 9.564C8.235 9.798 8.301 10.095 8.301 10.455C8.301 10.917 8.172 11.304 7.914 11.616C7.662 11.928 7.299 12.117 6.825 12.183L8.517 15H7.149L5.673 12.3H4.845V15H3.711V8.628ZM5.727 11.328C5.889 11.328 6.051 11.322 6.213 11.31C6.375 11.292 6.522 11.256 6.654 11.202C6.792 11.142 6.903 11.055 6.987 10.941C7.071 10.821 7.113 10.656 7.113 10.446C7.113 10.26 7.074 10.11 6.996 9.996C6.918 9.882 6.816 9.798 6.69 9.744C6.564 9.684 6.423 9.645 6.267 9.627C6.117 9.609 5.97 9.6 5.826 9.6H4.845V11.328H5.727ZM9.37995 8.628H13.6009V9.654H10.5139V11.22H13.4389V12.246H10.5139V13.974H13.7629V15H9.37995V8.628ZM14.8819 8.628H17.0959C17.4019 8.628 17.6959 8.658 17.9779 8.718C18.2659 8.772 18.5209 8.868 18.7429 9.006C18.9649 9.144 19.1419 9.33 19.2739 9.564C19.4059 9.798 19.4719 10.095 19.4719 10.455C19.4719 10.917 19.3429 11.304 19.0849 11.616C18.8329 11.928 18.4699 12.117 17.9959 12.183L19.6879 15H18.3199L16.8439 12.3H16.0159V15H14.8819V8.628ZM16.8979 11.328C17.0599 11.328 17.2219 11.322 17.3839 11.31C17.5459 11.292 17.6929 11.256 17.8249 11.202C17.9629 11.142 18.0739 11.055 18.1579 10.941C18.2419 10.821 18.2839 10.656 18.2839 10.446C18.2839 10.26 18.2449 10.11 18.1669 9.996C18.0889 9.882 17.9869 9.798 17.8609 9.744C17.7349 9.684 17.5939 9.645 17.4379 9.627C17.2879 9.609 17.1409 9.6 16.9969 9.6H16.0159V11.328H16.8979Z"
                fill="#244C82"
              />
            </svg>{" "}
            station Porte de Clichy{" "}
          </p>
          <p className="desc">
            {" "}
            <svg
              className="metro"
              width="30"
              height="23"
              viewBox="0 0 30 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11.5"
                cy="11.5"
                r="10.5"
                stroke="#244C82"
                stroke-width="2"
              />
              <path
                d="M3.711 8.628H6.195C6.435 8.628 6.672 8.658 6.906 8.718C7.14 8.772 7.347 8.865 7.527 8.997C7.713 9.123 7.863 9.288 7.977 9.492C8.091 9.696 8.148 9.942 8.148 10.23C8.148 10.59 8.046 10.887 7.842 11.121C7.638 11.355 7.371 11.523 7.041 11.625V11.643C7.239 11.667 7.422 11.724 7.59 11.814C7.764 11.898 7.911 12.009 8.031 12.147C8.151 12.279 8.244 12.435 8.31 12.615C8.382 12.789 8.418 12.978 8.418 13.182C8.418 13.53 8.349 13.821 8.211 14.055C8.073 14.283 7.89 14.469 7.662 14.613C7.44 14.751 7.182 14.85 6.888 14.91C6.6 14.97 6.306 15 6.006 15H3.711V8.628ZM4.845 11.22H5.88C6.258 11.22 6.54 11.148 6.726 11.004C6.918 10.854 7.014 10.659 7.014 10.419C7.014 10.143 6.915 9.939 6.717 9.807C6.525 9.669 6.213 9.6 5.781 9.6H4.845V11.22ZM4.845 14.028H5.889C6.033 14.028 6.186 14.019 6.348 14.001C6.516 13.983 6.669 13.941 6.807 13.875C6.945 13.809 7.059 13.716 7.149 13.596C7.239 13.47 7.284 13.302 7.284 13.092C7.284 12.756 7.173 12.522 6.951 12.39C6.735 12.258 6.396 12.192 5.934 12.192H4.845V14.028ZM14.6499 12.66C14.6499 13.044 14.5839 13.392 14.4519 13.704C14.3199 14.01 14.1399 14.271 13.9119 14.487C13.6839 14.703 13.4139 14.871 13.1019 14.991C12.7899 15.105 12.4509 15.162 12.0849 15.162C11.7189 15.162 11.3799 15.105 11.0679 14.991C10.7559 14.871 10.4829 14.703 10.2489 14.487C10.0209 14.271 9.84094 14.01 9.70894 13.704C9.58294 13.392 9.51994 13.044 9.51994 12.66V8.628H10.6539V12.624C10.6539 12.78 10.6779 12.945 10.7259 13.119C10.7739 13.287 10.8519 13.443 10.9599 13.587C11.0739 13.731 11.2209 13.851 11.4009 13.947C11.5869 14.037 11.8149 14.082 12.0849 14.082C12.3549 14.082 12.5799 14.037 12.7599 13.947C12.9459 13.851 13.0929 13.731 13.2009 13.587C13.3149 13.443 13.3959 13.287 13.4439 13.119C13.4919 12.945 13.5159 12.78 13.5159 12.624V8.628H14.6499V12.66ZM19.1651 9.996C19.0451 9.822 18.8831 9.696 18.6791 9.618C18.4811 9.534 18.2711 9.492 18.0491 9.492C17.9171 9.492 17.7881 9.507 17.6621 9.537C17.5421 9.567 17.4311 9.615 17.3291 9.681C17.2331 9.747 17.1551 9.834 17.0951 9.942C17.0351 10.044 17.0051 10.167 17.0051 10.311C17.0051 10.527 17.0801 10.692 17.2301 10.806C17.3801 10.92 17.5661 11.019 17.7881 11.103C18.0101 11.187 18.2531 11.268 18.5171 11.346C18.7811 11.424 19.0241 11.532 19.2461 11.67C19.4681 11.808 19.6541 11.991 19.8041 12.219C19.9541 12.447 20.0291 12.75 20.0291 13.128C20.0291 13.47 19.9661 13.77 19.8401 14.028C19.7141 14.28 19.5431 14.49 19.3271 14.658C19.1171 14.826 18.8711 14.952 18.5891 15.036C18.3071 15.12 18.0101 15.162 17.6981 15.162C17.3021 15.162 16.9211 15.096 16.5551 14.964C16.1891 14.832 15.8741 14.61 15.6101 14.298L16.4651 13.47C16.6031 13.68 16.7831 13.845 17.0051 13.965C17.2331 14.079 17.4731 14.136 17.7251 14.136C17.8571 14.136 17.9891 14.118 18.1211 14.082C18.2531 14.046 18.3731 13.992 18.4811 13.92C18.5891 13.848 18.6761 13.758 18.7421 13.65C18.8081 13.536 18.8411 13.407 18.8411 13.263C18.8411 13.029 18.7661 12.849 18.6161 12.723C18.4661 12.597 18.2801 12.492 18.0581 12.408C17.8361 12.318 17.5931 12.234 17.3291 12.156C17.0651 12.078 16.8221 11.973 16.6001 11.841C16.3781 11.703 16.1921 11.523 16.0421 11.301C15.8921 11.073 15.8171 10.77 15.8171 10.392C15.8171 10.062 15.8831 9.777 16.0151 9.537C16.1531 9.297 16.3301 9.099 16.5461 8.943C16.7681 8.781 17.0201 8.661 17.3021 8.583C17.5841 8.505 17.8721 8.466 18.1661 8.466C18.5021 8.466 18.8261 8.517 19.1381 8.619C19.4561 8.721 19.7411 8.889 19.9931 9.123L19.1651 9.996Z"
                fill="#244C82"
              />
            </svg>
            <svg
              className="metro"
              width="138"
              height="20"
              viewBox="0 0 138 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="18" fill="#F9E426" />
              <rect x="35" width="30" height="18" fill="#99D5DE" />
              <rect x="71" width="30" height="18" fill="#3E8C5A" />
              <rect x="108" width="30" height="18" fill="#C8C53E" />
              <path
                d="M10.108 8.078H10.542C10.7847 8.078 11.018 8.064 11.242 8.036C11.4753 8.008 11.6807 7.94733 11.858 7.854C12.0447 7.76067 12.194 7.62533 12.306 7.448C12.418 7.27067 12.474 7.03267 12.474 6.734C12.474 6.35133 12.3433 6.03867 12.082 5.796C11.8207 5.55333 11.48 5.432 11.06 5.432C10.724 5.432 10.4207 5.53 10.15 5.726C9.88867 5.91267 9.69733 6.17867 9.576 6.524L7.798 6.048C7.91 5.684 8.06867 5.36667 8.274 5.096C8.47933 4.82533 8.722 4.606 9.002 4.438C9.282 4.26067 9.59 4.13 9.926 4.046C10.262 3.962 10.612 3.92 10.976 3.92C11.4053 3.92 11.8113 3.976 12.194 4.088C12.5767 4.2 12.9127 4.368 13.202 4.592C13.4913 4.80667 13.72 5.082 13.888 5.418C14.0653 5.74467 14.154 6.12733 14.154 6.566C14.154 7.098 14.0047 7.574 13.706 7.994C13.4073 8.40467 12.992 8.67533 12.46 8.806V8.834C13.0947 8.92733 13.5753 9.198 13.902 9.646C14.2287 10.094 14.392 10.626 14.392 11.242C14.392 11.718 14.2987 12.138 14.112 12.502C13.9347 12.866 13.692 13.174 13.384 13.426C13.076 13.6687 12.7167 13.8553 12.306 13.986C11.9047 14.1073 11.4847 14.168 11.046 14.168C10.6353 14.168 10.248 14.1213 9.884 14.028C9.52 13.944 9.18867 13.8087 8.89 13.622C8.60067 13.4353 8.34867 13.1973 8.134 12.908C7.91933 12.6093 7.756 12.2547 7.644 11.844L9.436 11.368C9.53867 11.7787 9.72067 12.096 9.982 12.32C10.2433 12.544 10.598 12.656 11.046 12.656C11.27 12.656 11.48 12.6187 11.676 12.544C11.8813 12.4693 12.0587 12.3667 12.208 12.236C12.3667 12.096 12.488 11.9327 12.572 11.746C12.6653 11.55 12.712 11.3353 12.712 11.102C12.712 10.7847 12.642 10.528 12.502 10.332C12.3713 10.1267 12.1987 9.97267 11.984 9.87C11.7787 9.758 11.5453 9.68333 11.284 9.646C11.0227 9.60867 10.766 9.59 10.514 9.59H10.108V8.078ZM19.0372 6.02L17.1752 7.742L16.1952 6.58L19.1912 4.088H20.7172V14H19.0372V6.02Z"
                fill="black"
              />
              <path
                d="M49.07 5.6H45.08L45.038 7.574C45.1687 7.52733 45.332 7.49467 45.528 7.476C45.7333 7.45733 45.9247 7.448 46.102 7.448C46.5873 7.448 47.0307 7.52733 47.432 7.686C47.8427 7.83533 48.1927 8.05467 48.482 8.344C48.7713 8.63333 48.9953 8.97867 49.154 9.38C49.322 9.78133 49.406 10.234 49.406 10.738C49.406 11.27 49.3127 11.7507 49.126 12.18C48.9487 12.6 48.6967 12.9593 48.37 13.258C48.0527 13.5473 47.6747 13.7713 47.236 13.93C46.7973 14.0887 46.326 14.168 45.822 14.168C45.0287 14.168 44.352 13.9813 43.792 13.608C43.2413 13.2347 42.8493 12.6653 42.616 11.9L44.38 11.424C44.492 11.7787 44.6833 12.0587 44.954 12.264C45.2247 12.4693 45.5747 12.572 46.004 12.572C46.256 12.572 46.4847 12.53 46.69 12.446C46.9047 12.362 47.0867 12.2453 47.236 12.096C47.3947 11.9373 47.516 11.7553 47.6 11.55C47.684 11.3447 47.726 11.1207 47.726 10.878C47.726 10.5327 47.6607 10.2387 47.53 9.996C47.4087 9.75333 47.2407 9.55733 47.026 9.408C46.8113 9.24933 46.564 9.13733 46.284 9.072C46.004 8.99733 45.71 8.96 45.402 8.96C45.038 8.96 44.674 9.002 44.31 9.086C43.9553 9.17 43.6287 9.28667 43.33 9.436L43.428 4.088H49.07V5.6ZM54.9752 11.984H50.7612V10.318L54.7512 4.088H56.6552V10.472H58.0972V11.984H56.6552V14H54.9752V11.984ZM54.9752 6.468H54.9472L52.4692 10.472H54.9752V6.468Z"
                fill="black"
              />
              <path
                d="M84.118 4.088L81.738 7.756L81.766 7.784C81.8687 7.728 82.004 7.686 82.172 7.658C82.3493 7.63 82.522 7.616 82.69 7.616C83.1287 7.616 83.53 7.7 83.894 7.868C84.258 8.036 84.5707 8.26467 84.832 8.554C85.1027 8.84333 85.308 9.17933 85.448 9.562C85.5973 9.94467 85.672 10.3507 85.672 10.78C85.672 11.2933 85.5833 11.76 85.406 12.18C85.2287 12.6 84.9813 12.9593 84.664 13.258C84.356 13.5473 83.9827 13.7713 83.544 13.93C83.1147 14.0887 82.648 14.168 82.144 14.168C81.6213 14.168 81.1453 14.0933 80.716 13.944C80.2867 13.7853 79.9133 13.5613 79.596 13.272C79.288 12.9827 79.0453 12.628 78.868 12.208C78.7 11.788 78.616 11.3167 78.616 10.794C78.616 10.2713 78.7 9.8 78.868 9.38C79.0453 8.95067 79.2693 8.51667 79.54 8.078L82.074 4.088H84.118ZM80.38 10.766C80.38 11.018 80.4267 11.256 80.52 11.48C80.6133 11.6947 80.7393 11.886 80.898 12.054C81.066 12.2127 81.2573 12.3387 81.472 12.432C81.696 12.5253 81.934 12.572 82.186 12.572C82.438 12.572 82.6713 12.5253 82.886 12.432C83.11 12.3387 83.3013 12.2127 83.46 12.054C83.628 11.886 83.7587 11.6947 83.852 11.48C83.9453 11.256 83.992 11.018 83.992 10.766C83.992 10.514 83.9453 10.2807 83.852 10.066C83.7587 9.842 83.628 9.65067 83.46 9.492C83.3013 9.324 83.11 9.19333 82.886 9.1C82.6713 9.00667 82.438 8.96 82.186 8.96C81.934 8.96 81.696 9.00667 81.472 9.1C81.2573 9.19333 81.066 9.324 80.898 9.492C80.7393 9.65067 80.6133 9.842 80.52 10.066C80.4267 10.2807 80.38 10.514 80.38 10.766ZM92.4032 4.088L90.0232 7.756L90.0512 7.784C90.1538 7.728 90.2892 7.686 90.4572 7.658C90.6345 7.63 90.8072 7.616 90.9752 7.616C91.4138 7.616 91.8152 7.7 92.1792 7.868C92.5432 8.036 92.8558 8.26467 93.1172 8.554C93.3878 8.84333 93.5932 9.17933 93.7332 9.562C93.8825 9.94467 93.9572 10.3507 93.9572 10.78C93.9572 11.2933 93.8685 11.76 93.6912 12.18C93.5138 12.6 93.2665 12.9593 92.9492 13.258C92.6412 13.5473 92.2678 13.7713 91.8292 13.93C91.3998 14.0887 90.9332 14.168 90.4292 14.168C89.9065 14.168 89.4305 14.0933 89.0012 13.944C88.5718 13.7853 88.1985 13.5613 87.8812 13.272C87.5732 12.9827 87.3305 12.628 87.1532 12.208C86.9852 11.788 86.9012 11.3167 86.9012 10.794C86.9012 10.2713 86.9852 9.8 87.1532 9.38C87.3305 8.95067 87.5545 8.51667 87.8252 8.078L90.3592 4.088H92.4032ZM88.6652 10.766C88.6652 11.018 88.7118 11.256 88.8052 11.48C88.8985 11.6947 89.0245 11.886 89.1832 12.054C89.3512 12.2127 89.5425 12.3387 89.7572 12.432C89.9812 12.5253 90.2192 12.572 90.4712 12.572C90.7232 12.572 90.9565 12.5253 91.1712 12.432C91.3952 12.3387 91.5865 12.2127 91.7452 12.054C91.9132 11.886 92.0438 11.6947 92.1372 11.48C92.2305 11.256 92.2772 11.018 92.2772 10.766C92.2772 10.514 92.2305 10.2807 92.1372 10.066C92.0438 9.842 91.9132 9.65067 91.7452 9.492C91.5865 9.324 91.3952 9.19333 91.1712 9.1C90.9565 9.00667 90.7232 8.96 90.4712 8.96C90.2192 8.96 89.9812 9.00667 89.7572 9.1C89.5425 9.19333 89.3512 9.324 89.1832 9.492C89.0245 9.65067 88.8985 9.842 88.8052 10.066C88.7118 10.2807 88.6652 10.514 88.6652 10.766Z"
                fill="white"
              />
              <path
                d="M115.588 4.088H122.322V5.628L118.36 14H116.386L120.432 5.684H115.588V4.088ZM127.975 11.984H123.761V10.318L127.751 4.088H129.655V10.472H131.097V11.984H129.655V14H127.975V11.984ZM127.975 6.468H127.947L125.469 10.472H127.975V6.468Z"
                fill="black"
              />
            </svg>
            station Brochant-Cardinet{" "}
          </p>
          <p className="desc last">
            {" "}
            <img src={pic3} className="pictrain" alt="fireSpot" />{" "}
            <span className="special"> station Pont Cardinet </span>{" "}
          </p>
          <h2 className="title">
            {" "}
            <svg
              className="yellows"
              width="15"
              height="15"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="10" height="10" fill="#F2DC17" />
            </svg>{" "}
            SI VOUS VENEZ EN VOITURE{" "}
          </h2>

          <p className="desc">
            {" "}
            Parking Cardinet: 168 rue Cardinet, 75017 Paris{" "}
          </p>

          <GoogleMap />
        </div>

        <VisitCard />
      </div>

      <form
        name="contact"
        method="POST"
        action="../success"
        data-netlify="true"
      >
        <p>
          {" "}
          <b> CONTACT </b>{" "}
        </p>
        <div className="form-box">
          <p className="input-group">
            <label>
              <b>Nom </b> <input type="nom" name="nom" />
            </label>
          </p>

          <p className="input-group">
            <label>
              <b>Prénom</b> <input type="prenom" name="prenom" />
            </label>
          </p>
        </div>

        <div className="form-box">
          <p className="input-group">
            <label>
              <b> Email </b> <input type="email" name="email" />
            </label>
          </p>
          <p className="input-group">
            <label>
              <b>Numéro de téléphone</b> <input type="number" name="number" />
            </label>
          </p>
        </div>

        <p className="input-group">
          <label>
            <b>Message</b> <textarea name="message"></textarea>
          </label>
        </p>

        <p>
          <button className="button2" type="submit">
            Envoyer
          </button>
        </p>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
      </form>
    </div>
  </Layout>
)

export default Contact

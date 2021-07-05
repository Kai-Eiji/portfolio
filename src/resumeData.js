let resumeData = {
    "imagebaseurl":"https://github.com/Kai-Eiji",
    "name": "Kai Burkholder",
    "role": "Software Engineer",
    "linkedinId":"https://www.linkedin.com/in/kai-burkholder/",
    "skypeid": "Your skypeid",
    "roleDescription": " I am a rising senior at the University of San Francisco, majoring in Computer Science and minoring in Mathematics.\
                         I enjoy building Web Apps and currently diving into Cloud Computing Technologies such as AWS and GCP\ ",

    "socialLinks":[
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/kai-burkholder/",
          "className":"fa fa-linkedin"
        },
        {
          "name":"github",
          "url":"https://github.com/Kai-Eiji",
          "className":"fa fa-github"
        }
      ],
    "aboutme":"I enjoy building Web Apps. I have created web apps using technologies such as AWS, Django, and Java.\
               I have also worked as research fellow and worked with my team to publish a research paper about Graph Neural Networls",
    "address":"https://www.linkedin.com/in/kai-burkholder/",
    "website":"kaiburkholder.jp@gmail.com",
    "education":[
      {
        "UniversityName":"Univrsity of San Francisco",
        "specialization":"BS, Majour: Computer Science, Minor: Mathematics",
        "MonthOfPassing":"Expected Graduation",
        "YearOfPassing":"May 2022",
        "Achievements":"GPA 4.0/4.0"
      }
    ],
    "work":[
      {
        "CompanyName":"Software Engineer Intern",
        "specialization":"Lockheed Martin",
        "MonthOfLeaving":"",
        "YearOfLeaving":"June 2021 - Argust 2021",
        "Achievments": [
          {"Achievement":"Full-Stack Software Engineer at Lockheed Martin Software Factory Team."},
          {"Achievement":"Developed a new application for marketing content management"},
          {"Achievement": "Built backend-service with Go and MongoDB, built frontend \
          application with React.js as part of Micro-Frontend architecture, wrote tests for the backend-service with \
          Go, set up CI/CD pipeline for deployment."}
        ]
      },
      {
        "CompanyName":"Research Intern",
        "specialization":"Lehigh University (Remote)",
        "MonthOfLeaving":"",
        "YearOfLeaving":"May 2020 - May 2021",
        "Achievments": [
          {"Achievement":"Worked to publish a research paper, “Certification and Trade-off of Multiple Fairness Criteria in Graph-based Spam Detection”\
          as one of the first author. Currently under review for CIKM 2021."},
          {"Achievement":"Implemented Multi-Objective-Optimization Algorithm for GNN (Graph Neural Networks) with PyTorch."},
          {"Achievement" : "Constructed multiple fairness metrics to measure discrepant spammer detection results for GNN."},
          {"Achievement" : "Developed software in python that decreases the accuracy of Graph-based spam detection."}
        ],
      },
      {
        "CompanyName":"Computer Archtecture Teching Assistant",
        "specialization":"University of San Francisco",
        "MonthOfLeaving":"",
        "YearOfLeaving":"Aug 2020 - Present",
        "Achievments": [
          {"Achievement":"Hosted weekly lab hours to answer student questions about class concepts and assist with assignments and grading. "},
          {"Achievement":"Analyzed student code and assessing functionality and design of software written in C and ARM Assembly. "}
        ]
      },
      {
        "CompanyName":"Java Teching Assistant",
        "specialization":"University of San Francisco",
        "MonthOfLeaving":"",
        "YearOfLeaving":"Jan 2020 - May 2020",
        "Achievments": [
          {"Achievement":"Held office hours to answer student’s questions and assist with their Java programming projects."},
          {"Achievement":"Graded Java programming projects. Assisted the professor during class time and lab hours."}
        ]
      }
    ],
    "skillCategories":[
      {
        "skillsDescription":"Programming Language",
        "skills":[
          {
            "skillname":"Python"
          },
          {
            "skillname":"Java"
          },
          {
            "skillname":"Go"
          },
          {
            "skillname":"C"
          },
          {
            "skillname":"JavaScript"
          },
        ],
      },
      {
        "skillsDescription":"Frameworks",
        "skills":[
          {
            "skillname":"Django"
          },
          {
            "skillname":"React.js"
          },
          {
            "skillname":"AWS"
          }, 
          {
            "skillname": "PyTorch"
          },
          
        ],
      },
      {
        "skillsDescription": "Databese",
        "skills":[
          {
            "skillname":"MySQL"
          },
          {
            "skillname":"MongoDB"
          },
          
        ],
      }
    ],
    "portfolio":[
      {
        "name":"TechCompShare.com",
        "short_description": "Web App to know more about Intern compensation! Tech: Django Rest Framework, Python3, SQLite3, React.js",
        "description":"CompShare.com is a platform where tech interns can anonymously share their intern compensation\
                       so that we can know what's a fair compensation. This app lets users to search tech intern compensation\
                       based on company, location, salary-range, grade-year(junior, senior, etc). Also it provides visualized summary\
                       of each company's compensation. It has 600+ data from users or data gathered by web-scraping reddit.",
                       
        "imgurl":"images/portfolio/InternInfo.png",
        "projecturl":"https://www.techcompshare.com/",
      },
      {
        "name":"Live Tweet Comparator",
        "short_description": "Web App to compare and analyze twitter accounts! Tech: AWS (Kinesis, lambda, ESS, S3, Comprehend), Node.js, Kibana",
        "description":"This app streams tweets from Twitter Stream API and compares the people's sentiment towards two Twitter accounts by analyzing\
                       the sentiment of the tweets those two accounts were tagged.",  
        "imgurl":"images/portfolio/twitter-stream.png",
        "projecturl":"https://kaiburkholderjp.wixsite.com/tweetcomparator",
      },
      {
        "name":"BestBayHotels.com",
        "short_description": "Web App to find the best hotel in Bay Area for you! Tech: Jetty(Java Server), MySQL, Velocity(Template Engine), JavaScript, HTML, CSS",

        "description":"This Web App was created so that people can search\
                       hotels in SF Bay Area based on locations, keywords,\
                       and reviews, and users can save the hotels they like\
                       to look it up later. Also this web app functions as a\
                       review platform where people can rate and post reviews\
                       for the hotels, and browse other people's reviews (and 'like' it) as well.",
                       
        "imgurl":"images/portfolio/hotel_main.png",
        "projecturl":"https://kaiburkholderjp.wixsite.com/bestbayhotels",
      },

    ],
  }
  
  export default resumeData
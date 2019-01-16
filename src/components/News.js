import React, { Component } from 'react';

class News extends Component {

  render() {
    return (
      <div>
	    	<div className='parallax section-title news-title'>
	    		News
	    	</div>	
	    	<div className='news'>
				<a className='news-block' href='https://www.wpi.edu/news/wpi-secures-28-million-develop-smartphone-app-help-assess-health-soldiers' target='_blank'>
					WPI Secures $2.8 Million to Develop a Smartphone App to Help Assess the Health of Soldiers
				</a>
				<a className='news-block' href='http://www.wbjournal.com/article/20180925/NEWS01/180929975/wpi-granted-3m-to-develop-soldier-brain-injury-smartphone-app' target='_blank'>
					WPI granted $3M to develop soldier brain injury smartphone app
				</a>
				<a className='news-block' href='https://www.prweb.com/releases/worcester_polytechnic_institute_secures_2_8_million_to_develop_a_smartphone_app_to_help_assess_the_health_of_soldiers/prweb15784671.htm' target='_blank'>
					Worcester Polytechnic Institute Secures $2.8 Million to Develop a Smartphone App to Help Assess the Health of Soldiers
				</a>
				<a className='news-block' href='https://www.aiin.healthcare/topics/research/researchers-develop-app-assessing-soldiers-health' target='_blank'>
					Researchers receive $2.8M to develop app for assessing soldiers health
				</a>
			</div>
	    	{
	  //   	<div className='news'>
			// 	<div className='news-block'>
			// 		News title with link
			// 	</div>
			// 	<div className='news-block'>
			// 		News title with link
			// 	</div>
			// 	<div className='news-block'>
			// 		News title with link
			// 	</div>
			// 	<div className='news-block'>
			// 		News title with link
			// 	</div>
			// </div>
			}
		</div>
    );
  }
}

export default News;

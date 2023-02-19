var assessments = {
	"A": {
		"title": "The Personality Assessment",
		"instructions": "On the following assessment, you'll uncover the truth about the way God made you. Shy, out-going, loud, quiet. . . it's all part of God's plan to use you to make a difference. And God doesn't make mistakes. As you go through the questions that follow, answer quickly and go with your first response. There is no right answer or wrong answer. Why? Because the way God created you unlocks the door to what God wants to do through you!",
		"mapped_assessment_json": "personality_styles",
		"related_questions_per_letter": 5,
		"letters_to_display": 4,
		"question_type": "radio"
		},
	"B": {
		"title": "Discovering Your Spiritual Gifts",
		"instructions": "On the following assessment, you will discover your spiritual gifts. And yes, you do have them!\n\nSpiritual gifts are not natural aptitudes, they are not your strengths or abilities, they are not character traits, they aren't titles or positions you've been given. Spiritual gifts are God-given. And they were given to you by God for a purpose. They are 'spiritual' gifts because they go far beyond your natural giftings!\n\nAs you go through the questions that follow, prayerfully consider the results and what God could be speaking to you. Go with your first response. Don't talk yourself into or out of an answer. The more honest that you are, the more accurate your results will be.",
		"mapped_assessment_json": "spiritual_gifts",
		"related_questions_per_letter": 3,
		"letters_to_display": "all",
		"question_type": "select"
	}
};

var personality_styles = [
	{
		"letter": "D",
		"related_questions": [
			"I am assertive, demanding, and decisive.",
			"I enjoy doing multiple tasks at once.",
			"I thrive in a challenge-based environment.",
			"I think about tasks above others or myself.",
			"I am motivated by accomplishment and authority."
		],
		"definition_name": "Dominant",
		"definition": "\"D\"s are direct and decisive; they are risk takers and problem solvers. They are more concerned with completing tasks and winning than they are with gaining approval from people. Though the internal drive tends to make them insensitive to those around them, \"D\"s are not afraid to challenge the status quo, and they thrive when it comes to developing new things. They need discipline to excel, and they respond to direct confrontation. The greatest fear of a \"D\" is to be taken advantage of, and even despite their possible weaknesses-which include an aversion to routine, a tendency to overstep authority, an argumentative nature, and a habit of taking on too much-they place a high value on time and use their innovative thinking to accomplish difficult tasks and conquer challenges.",
		"related_scriptures": [
		]
	},
	{
		"letter": "I",
		"related_questions": [
			"I enjoy influencing and inspiring people.",
			"I am optimistic about others.",
			"I tend to be the life of the party.",
			"I think about motivating people.",
			"I am motivated by recognition and approval."
		],
		"definition_name": "Influencer",
		"definition": "\"I\"s are inspiring and impressive. Enthusiastic, optimistic, impulsive, and emotional-they tend to be creative problem solvers and excellent encouragers. They often have a large number of friends, but they can become more concerned with approval and popularity than with getting results. An \"I\"s greatest fear is rejection, but they thrive when it comes to motivating others. Their positive sense of humor helps them negotiate conflicts. Though they can be inattentive to details and poor listeners, they can be great peacemakers and effective teammates when they control their feelings and minimize their urge to entertain and be the center of attention. They value lots of human touch and connection.",
		"related_scriptures": [
		]
	},
	{
		"letter": "S",
		"related_questions": [
			"I thrive in consistent environments over changing ones.",
			"I prefer specifics over generalizations.",
			"I enjoy small groups of people.",
			"I prefer being a member of a team over leading the team.",
			"I am motivated by stability and support."
		],
		"definition_name": "Critical Thinker",
		"definition": "\"S\"s are steady and more reserved. Because they are stable and predictable, they do not like change, and they thrive in secure, non-threatening environments. They are often friendly and understanding as well as good listeners and loyal workers who are happy doing the same job consistently. With an incredible ability to forgive, reliable and dependable \"S\"s tend to make the best friends. Their greatest fear, however, is loss of security, and their possible weaknesses naturally include not only resistance to change, but also difficulty adjusting to it. They can also be too sensitive to criticism and unable to establish priorities. In order to avoid be taken advantage of, \"S\"s need to be stronger and learn how to say \"no.\" They also like to avoid the limelight, but when given an opportunity to genuinely help others, they will gladly rise to the occasion. They feel most valued when they have truly helped someone.",
		"related_scriptures": [
		]
	},
	{
		"letter": "C",
		"related_questions": [
			"I typically do not take big risks.",
			"I love tasks, order and details.",
			"I am right most of the time.",
			"I comply with clearly defined rules.",
			"I am motivated by quality and correctness."
		],
		"definition_name": "Steady Relator",
		"definition": "\"C\"s are compliant and analytical. Careful and logical lines of thinking drive them forward, and accuracy is a top priority. They hold high standards and value systematic approaches to problem solving. Though they thrive when given opportunities to find solutions, they tend to ignore the feelings of others and can often be critical and downright crabby. Verbalizing feelings is difficult for them, but when they are not bogged down in details and have clear-cut boundaries, they can be big assets to the team by providing calculated \"reality checks\". The \"C\"s biggest fear is criticism, and their need for perfectionism is often a weakness, as is their tendency to give in when in the midst of an argument. However, they are thorough in all activities and can bring a conscientious, even-tempered element to the team that will provide solid grounding. They value being correct the most.",
		"related_scriptures": [
		]
	},
	{
		"letter": "D/I",
		"related_questions": [],
		"definition_name": "",
		"definition": "\"D/I\"s are curious concluders who place emphasis on the bottom line and work hard to reach their goals. They are more determined than they are inspirational, yet their high expectations and standards for themselves and those around them typically causes them to make quite an impact, motivating others to follow them. They have an array of interests and can become distracted by taking on too many projects. They often need to focus, prioritize, and simply slow down. Because \"D/ I\"s thrive on activity and forward motion, they like to accomplish tasks through a large number of people.",
		"related_scriptures": [
		]
	},
	{
		"letter": "I/D",
		"related_questions": [],
		"definition_name": "",
		"definition": "\"I/D\"s are persuaders who are outgoing and energetic. They enjoy large groups and use their power of influence to attain respect and convince people to follow their lead. Sometimes they can be viewed as fidgety and nervous, but it comes from their need to be a part of challenges that have variety, freedom, and mobility. \"I/D\"s could benefit from learning to look before they leap and spending more time being studious and still. They make inspiring leaders and know how to get results from and through people.",
		"related_scriptures": [
		]
	},
	{
		"letter": "S/D",
		"related_questions": [],
		"definition_name": "",
		"definition": "\"S/D\"s are quiet leaders who can be counted on to get the job done. They perform better in small groups and do not enjoy speaking in front of crowds. Though they can be soft- and hard-hearted at the same time, they enjoy close relationships with people, being careful not to dominate them. Challenges motivate them, especially ones that allow them to take a systematic approach. Because this personality style tends to be determined, persevering through time and struggles, they benefit from encouragement and positive relationships.",
		"related_scriptures": [
		]
	},
	{
		"letter": "C/D",
		"related_questions": [],
		"definition_name": "",
		"definition": "\"C/D\"s are cautious and determined designers who are consistently task-oriented and very aware of problems. Sometimes viewed as insensitive, they do care about individual people but have a difficult time showing it. They often feel they are the only ones who can do the job the way it needs to be done, but because of their administrative skills, they are able to bring plans for change and improvements to fruition. \"C/D\"s have a tendency to be serious and could benefit from being more optimistic and enthusiastic. Despite their natural drive to achieve, they should concentrate on developing healthy relationships and simply loving people.",
		"related_scriptures": [
		]
	},
	{
		"letter": "D/S",
		"related_questions": [],
		"definition_name": "",
		"definition": "\"D/S\"s are attainers and achievers with an ability to persevere. They are more active than passive, but they possess a kind of calm sensitivity and steadiness that makes them good leaders. They seem to be people oriented but can easily be dominant and decisive when it comes to tasks and project planning. They strive to accomplish goals with fierce determination that comes from strong internal drive, but they could benefit from contemplative and conservative thinking as well as spending more time focusing on relationships.",
		"related_scriptures": [
		]
	},
	{
		"letter": "I/S",
		"related_questions": [],
		"definition_name": "",
		"definition": "\"I/S\"s are influential counselors who love people, and it’s no surprise that people love them. They live to please and serve, and they tend to be good listeners. Looking good and encouraging others is important to them, as is following through and being obedient. They often lack in the area of organization and can be more concerned with the people involved than they are with the task at hand. However, they can be center stage or behind the scenes with equal effectiveness, and they shine when it comes to influencing and helping others.",
		"related_scriptures": [
		]
	},
	{
		"letter": "S/I",
		"related_questions": [],
		"definition_name": "",
		"definition": "\"S/I\"s are inspirational counselors who exhibit warmth and sensitivity. Tolerant and forgiving, they have many friends because they accept and represent others well. Their social nature and desire to be likable and flexible makes them inclined to be overly tolerant and non-confrontational. \"S/I\"s will benefit from being more task-oriented and paying more attention to detail. Kind and considerate, they include others and inspire them to follow. Words of affirmation go a long way with this personality type, and with the right motivation, they can be excellent team players.",
		"related_scriptures": [
		]
	},
	{
		"letter": "C/I",
		"related_questions": [],
		"definition_name": "",
		"definition": "\"C/I\"s pay attention to the details. They tend to impress others by doing things right and stabilizing situations. Not considered aggressive or pushy, they enjoy both large and small crowds. Though they work well with people, they are sometimes too sensitive to what others think about them and their work. They could benefit from being more assertive and self motivated. Often excellent judges of character, they easily trust those who meet their standards. They are moved by genuine and enthusiastic approval as well as concise and logical explanations.",
		"related_scriptures": [
		]
	},
	{
		"letter": "D/C",
		"related_questions": [],
		"definition_name": "",
		"definition": "\"D/C\"s are challengers and can either be determined students or defiant critics. Being in charge is important to them, yet they care little about what others think as long as they get the job done. They have a great deal of foresight and examine every avenue to find the best solution; they prefer to work alone. Though they fear failure and the lack of influence, they are motivated by challenges and can often be excellent administrators. They can benefit from learning to relax and paying more attention to people.",
		"related_scriptures": [
		]
	},
	{
		"letter": "I/C",
		"related_questions": [],
		"definition_name": "",
		"definition": "\"I/C\"s are inspiring yet cautious assessors who are excellent communicators through the combination of concerned awareness and appreciation of people. They excel in determining ways to improve production. They tend to be impatient and critical, and they can also be overly persuasive and too consumed by the desire to win. \"I/C\"s like to work inside the box, and they could benefit from trying new things and caring less about what others think. This personality type often possesses a gift for teaching; they are generally dependable when it comes to paying attention to details and getting the job done.",
		"related_scriptures": [
		]
	},
	{
		"letter": "S/C",
		"related_questions": [],
		"definition_name": "",
		"definition": "\"S/C\"s are diplomatic and steady, as well as detail-oriented. Stable and contemplative, they like to weigh the evidence and discover the facts to come to a logical conclusion. More deliberate, they prefer to take their time, especially when the decision involves others. Possible weaknesses include being highly sensitive and unable to handle criticism, and they also need to be aware of the way they treat others. Operating best in precise and cause-worthy projects, the \"S/C\" can be a peacemaker; this makes them a loyal team member and friend.",
		"related_scriptures": [
		]
	},
	{
		"letter": "C/S",
		"related_questions": [],
		"definition_name": "",
		"definition": "\"C/S\"s are systematic and stable. They tend to do one thing at a time-and do it right. Reserved and cautious, they would rather work behind the scenes to stay on track; however, they seldom take risks or try new things and naturally dislike sudden changes in their environments. Precisionists to the letter, they painstakingly require accuracy and fear criticism, which they equate to failure. Diligent workers, their motivation comes from serving others.",
		"related_scriptures": [
		]
	}
];

var spiritual_gifts = [
	{
		"letter": "A",
		"related_questions": [
			"I like organizing services and events.",
			"I am passionate about managing details.",
			"Creating a task list is easy and enjoyable for me."
		],
		"definition_name": "Administration",
		"definition": "The gift of administration is the divine strength or ability to organize multiple tasks and groups of people to accomplish these tasks.",
		"related_scriptures": [
		]
	},
	{
		"letter": "B",
		"related_questions": [
			"I enjoy starting new churches.",
			"I prefer to pioneer new ministry projects.",
			"I am attracted to ministries that start new churches."
		],
		"definition_name": "Apostleship",
		"definition": "The gift of apostleship is the divine strength or ability to pioneer new churches and ministries through planting, overseeing, and training.",
		"related_scriptures": [
		]
	},
	{
		"letter": "C",
		"related_questions": [
			"Working with my hands is fun for me.",
			"I consider myself a craftsman or craftswoman.",
			"Building something with my hands is very rewarding to me."
		],
		"definition_name": "Craftsmanship",
		"definition": "The gift of craftsmanship is the divine strength or ability to plan, build, and work with your hands in construction environments to accomplish multiple ministry applications.",
		"related_scriptures": [
		]
	},
	{
		"letter": "D",
		"related_questions": [
			"I can tell when someone is not sincere.",
			"I sense when situations are spiritually unhealthy.",
			"I can pinpoint issues or problems before others."
		],
		"definition_name": "Discernment",
		"definition": "The gift of discernment is the divine strength or ability to spiritually identify falsehood and to distinguish between right and wrong motives and situations.",
		"related_scriptures": [
		]
	},
	{
		"letter": "E",
		"related_questions": [
			"I pray for lost people daily.",
			"I am greatly concerned about seeing the lost saved.",
			"I enjoy sharing the gospel with a total stranger."
		],
		"definition_name": "Evangelism",
		"definition": "The gift of evangelism is the divine strength or ability to help non-Christians take the necessary steps to becoming a born-again Christian.",
		"related_scriptures": [
		]
	},
	{
		"letter": "F",
		"related_questions": [
			"Encouraging others is a high priority in my life.",
			"I try to come across loving and caring.",
			"I look for ways to be an encouragement to other people."
		],
		"definition_name": "Exhortation",
		"definition": "The gift of exhortation is the divine strength or ability to encourage others through the written or spoken word and Biblical truth.",
		"related_scriptures": [
		]
	},
	{
		"letter": "G",
		"related_questions": [
			"Believing God for our daily needs is important to me.",
			"Asking God for a list of big things is exciting to me.",
			"I trust that God has my back in every situation."
		],
		"definition_name": "Faith",
		"definition": "The gift of faith is the divine strength or ability to believe in God for unseen supernatural results in every arena of life.",
		"related_scriptures": [
			"Acts 11:22-24", "Romans 4:18-21", "1 Corinthians 12:9", "Hebrews 11"
		]
	},
	{
		"letter": "H",
		"related_questions": [
			"Influencing others for the kingdom of God through finances is extremely important to me.",
			"I find ways to give offerings above my tithe.",
			"Making more money means that I can give more."
		],
		"definition_name": "Giving",
		"definition": "The gift of giving is the divine strength or ability to produce wealth and to give by tithes and offerings for the purpose of advancing the Kingdom of God on earth.",
		"related_scriptures": [
		]
	},
	{
		"letter": "I",
		"related_questions": [
			"I look for opportunities to pray for the sick.",
			"I believe miraculous healing is for this day and age.",
			"God has used me to bring healing to those who are sick."
		],
		"definition_name": "Healing",
		"definition": "The gift of healing is the divine strength or ability to act as an intermediary in faith, prayer, and by the laying-on of hands for the healing of physical and mental illnesses.",
		"related_scriptures": [
		]
	},
	{
		"letter": "J",
		"related_questions": [
			"I enjoy doing the little things that others do not.",
			"Helping others is one of my highest achievements.",
			"Being a part of the process is fulfilling to me."
		],
		"definition_name": "Helps",
		"definition": "The gift of helps is the divine strength or ability to work in a supportive role for the accomplishment of tasks in Christian ministry.",
		"related_scriptures": [
		]
	},
	{
		"letter": "K",
		"related_questions": [
			"Having people over to my house is something I do often.",
			"Creating a warm and welcoming home is important to me.",
			"I tend to make total strangers feel at home."
		],
		"definition_name": "Hospitality",
		"definition": "The gift of hospitality is the divine strength or ability to create warm, welcoming environments for others in places such as your home, office, or church.",
		"related_scriptures": [
		]
	},
	{
		"letter": "L",
		"related_questions": [
			"Spending hours in prayer for other people is very enjoyable to me.",
			"I am burdened to pray for situations in the world.",
			"People often describe me as a prayer warrior."
		],
		"definition_name": "Intercession",
		"definition": "The gift of intercession is the divine strength or ability to stand in the gap in prayer for someone, something, or someplace, believing for profound results.",
		"related_scriptures": [
		]
	},
	{
		"letter": "M",
		"related_questions": [
			"Education is very important to me.",
			"People seek me out to learn more about the Kingdom of God.",
			"I enjoy knowing biblical details and helping others to understand."
		],
		"definition_name": "Knowledge",
		"definition": "The gift of knowledge is the divine strength or ability to understand and to bring clarity to situations and circumstances often accompanied by a word from God.",
		"related_scriptures": [
		]
	},
	{
		"letter": "N",
		"related_questions": [
			"I tend to motivate others to get involved.",
			"I prefer to take the lead whenever necessary.",
			"I delegate responsibilities to accomplish tasks."
		],
		"definition_name": "Leadership",
		"definition": "The gift of leadership is the divine strength or ability to influence people at their level while directing and focusing them on the big picture, vision, or idea.",
		"related_scriptures": [
		]
	},
	{
		"letter": "O",
		"related_questions": [
			"My heart hurts when I see others hurting.",
			"I'm very sensitive to sad stories.",
			"I am motivated to help those who are less fortunate."
		],
		"definition_name": "Mercy",
		"definition": "The gift of mercy is the divine strength or ability to feel empathy and to care for those who are hurting in any way.",
		"related_scriptures": [
		]
	},
	{
		"letter": "P",
		"related_questions": [
			"I believe God will use me to enact His miracles.",
			"Miracles often happen when I'm nearby.",
			"I have a constant hunger to see God's miraculous power."
		],
		"definition_name": "Miracles",
		"definition": "The gift of miracles is the divine strength or ability to alter the natural outcomes of life in a supernatural way through prayer, faith, and divine direction.",
		"related_scriptures": [
		]
	},
	{
		"letter": "Q",
		"related_questions": [
			"I enjoy sharing the gospel with other people groups and nationalities.",
			"Living in another country to benefit the gospel is exciting to me.",
			"I focus a lot on reaching the world for Christ."
		],
		"definition_name": "Missionary",
		"definition": "The gift of missions is the divine strength or ability to reach others outside of your culture and nationality, while in most cases living in that culture or nation.",
		"related_scriptures": [
		]
	},
	{
		"letter": "R",
		"related_questions": [
			"I've devoted considerable time to mastering my voice and or instrument.",
			"I desire to serve the church through worship.",
			"I gain my deepest satisfaction through leading others in vocal or instrumental worship."
		],
		"definition_name": "Music/Worship",
		"definition": "The gift of music/worship is the divine strength or ability to sing, dance, or play an instrument primarily for the purpose of helping others worship God.",
		"related_scriptures": [
		]
	},
	{
		"letter": "S",
		"related_questions": [
			"Caring for the hurting is paramount in my eyes.",
			"I enjoy connecting, caring for, and coaching others.",
			"I enjoy walking with someone in times of difficulty."
		],
		"definition_name": "Pastor/Shepherd",
		"definition": "The gift of pastor/shepherd is the divine strength or ability to care for the personal needs of others by nurturing and mending life issues.",
		"related_scriptures": [
		]
	},
	{
		"letter": "T",
		"related_questions": [
			"The willful sin of others really aggravates me.",
			"Confronting someone with sin in their life is not hard.",
			"I enjoy hearing passionate and clear preaching of the truth."
		],
		"definition_name": "Prophecy",
		"definition": "The gift of prophecy is the divine strength or ability to boldly speak and bring clarity to scriptural and doctrinal truth, in some cases foretelling God’s plan.",
		"related_scriptures": [
		]
	},
	{
		"letter": "U",
		"related_questions": [
			"I enjoy serving behind the scenes.",
			"It bothers me when people sit around and do nothing.",
			"I like to do small things that others pass over."
		],
		"definition_name": "Service",
		"definition": "The gift of serving is the divine strength or ability to do small or great tasks in working for the overall good of the body of Christ.",
		"related_scriptures": [
		]
	},
	{
		"letter": "V",
		"related_questions": [
			"I like creating outlines of the Bible.",
			"I share Biblical truth with others in hopes of their personal growth.",
			"I prefer to teach the Bible topically rather than verse by verse."
		],
		"definition_name": "Teaching",
		"definition": "The gift of teaching is the divine strength or ability to study and learn from the Scriptures primarily to bring understanding and depth to other Christians.",
		"related_scriptures": [
		]
	},
	{
		"letter": "W",
		"related_questions": [
			"God has used me to interpret a heavenly language.",
			"I pray in tongues daily.",
			"Praying in the Spirit is encouraging and important to me."
		],
		"definition_name": "Tongues (and Interpretation)",
		"definition": "The gift of tongues is the divine strength or ability to pray in a heavenly language to encourage your spirit and to commune with God. The gift of tongues is often accompanied by interpretation and should be used appropriately.",
		"related_scriptures": [
		]
	},
	{
		"letter": "X",
		"related_questions": [
			"I enjoy the book of Proverbs more than any other book in the Bible.",
			"When I study scripture God gives me unique insights.",
			"When faced with difficulty I tend to make wise decisions and choices."
		],
		"definition_name": "Wisdom",
		"definition": "The gift of wisdom is the divine strength or ability to apply the truths of Scripture in a practical way, producing the fruitful outcome and character of Jesus Christ.",
		"related_scriptures": [
		]
	}
];
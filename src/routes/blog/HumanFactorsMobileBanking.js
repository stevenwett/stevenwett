import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class HumanFactorsMobileBanking extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			settings: props.settings,
			projects: props.projects,
		};
	}

	componentDidMount() {
		if (!this.state.settings.debug) {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
	}

	render() {
		// const {} = this.state;

		return (
			<div className="page page-blog-single geminimade">
				<Header route="/blog" />
				<div className="panel intro single-intro">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<div className="content">
									<Link to="/blog" className="back no-line">
										<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg" title="Back">
											<path d="M20.7071 8.97838C21.0976 8.58785 21.0976 7.95469 20.7071 7.56416L14.3431 1.2002C13.9526 0.809679 13.3195 0.809679 12.9289 1.2002C12.5384 1.59073 12.5384 2.22389 12.9289 2.61442L18.5858 8.27127L12.9289 13.9281C12.5384 14.3186 12.5384 14.9518 12.9289 15.3423C13.3195 15.7329 13.9526 15.7329 14.3431 15.3423L20.7071 8.97838ZM0.75 9.27127H20V7.27127H0.75V9.27127Z" fill="#DDAD02"/>
										</svg>
									</Link>
									<h2 className="visually-hidden">The Human Factors of Mobile Banking</h2>
									<div className="title">The Human Factors of Mobile Banking</div>
									<p>By Steven Wett on December 6, 2022</p>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<div className="content">
									<p>Most of us have used our phones to check our bank accounts or to transfer money to a friend. When the app is well-designed, we hardly notice. However, when we run into a difficult scenario – such as, you can’t find how to transfer funds or you’re not sure if the payment went through – it can be infuriating.</p>

									<h2>What are “human factors”?</h2>
									<p>The term <em>human factors</em> has its roots in ergonomics and historically has focused on designing jobs and equipment that are fit for people. Another similar concept called <em>human-centered design</em> is an approach to problem-solving that aims to make the system usable for the people for whom it was designed. Using these concepts, we can find out why we get frustrated when a system doesn’t behave how we expect.</p>
									<p>In this review, we will inspect the interface designs of three mobile banking apps and critique them using evidence-based, human-centered design principles. By the end, we’ll identify how certain aspects of the designs might help or harm users.</p>

									<h2>Evaluating interface designs</h2>
									<p>Cognitive psychologist and design pioneer Don Norman claims that two of the most important characteristics of good design are <em>discoverability</em> and <em>understanding</em>.<sup className="inline-refs"><a href="#ref6">[6]</a></sup> For those designing interfaces, these characteristics are an important reminder that they are created for and used by humans. It may seem obvious, but specifically centering the focus on the humans for whom the product was intended ensures that the designs match their needs and capabilities. When the business goals are prioritized over human goals, there can be a mismatch between user needs and options available.</p>
									<p><strong>How might we evaluate a user interface design?</strong> Another prominent design legend named Jakob Nielson, who co-founded a consulting firm with Don Norman, developed a set of general principles called “heuristics” to help us evaluate interface designs. We’ll complete a usability inspection using Nielson’s <a href="https://www.nngroup.com/articles/ten-usability-heuristics/">10 Usability Heuristics for User Interface Design</a> to help us identify patterns in the designs.</p>

									<h2>Mobile banking in a nutshell</h2>
									<p>It’s easy to take it for granted that today you can check your bank account balances and transfer funds on your phone from anywhere. Mobile banking is a service provided by a bank that allows people to process financial transactions using a smartphone or mobile device. In 2012, about a third of Americans were using mobile banking. Today, about two-thirds of Americans and 80% of millennials have reported using mobile banking.<sup className="inline-refs"><a href="#ref1">[1]</a><a href="#ref2">[2]</a><a href="#ref4">[4]</a></sup></p>
									<p>What’s the difference between traditional banking and online banking?</p>
									<ul>
										<li><strong>Traditional banking</strong> often provides mobile banking but also has physical locations and a banker that you can go speak with. Fees tend to be higher, interest rates on your money lower and overall more financial services available.</li>
										<li><strong>Online banking</strong> generally refers to an online-first approach to banking where accounts can be opened and managed within the app. They generally don’t have physical locations and can have lower fees and better interest rates.<sup className="inline-refs"><a href="#ref4">[4]</a></sup></li>
									</ul>
									<p>Both traditional and online banking usually provide mobile banking as a service. For this review, I have inspected the mobile apps for three banks, all traditional banks, two large and one smaller community bank – Chase, Wells Fargo and Merchants – respectively.</p>

									<h2>Human factors and usability heuristics</h2>
									<h3>Recall requires more mental effort than recognition</h3>
									<p>The human brain has evolved to be incredibly quick at recognizing things. It’s the reason why multiple-choice questions are often easier than open-ended questions. However, recalling information without visual support is very difficult for our brains.<sup className="inline-refs"><a href="#ref3">[3]</a><a href="#ref5">[5]</a></sup> Perhaps this is why user interfaces exist in the first place – if humans were better at recall, maybe our phones would simply have a command line ready for instructions.</p>
									<p>Considerations when assessing <strong>memory recognition and recall</strong> in user interfaces:</p>
									<ul>
										<li>Make actions as obvious as possible</li>
										<li>Give users easy options to choose from, instead of making them think of it themselves</li>
										<li>Promote recognition by making information easily accessible</li>
									</ul>
									<figure className="image-full">
										<picture>
											<img src="/images/human-factors-memory-recall.jpg" alt="Screenshots of icons within the apps" />
										</picture>
										<figcaption>Figure 1. Icon usage in the mobile banking apps</figcaption>
									</figure>
									<h4>Inspecting the banking apps</h4>
									<p><strong>Clear actions with unique icons</strong> – Chase’s transfer page has buttons that are unique and recognizable with clear and concise labels that use familiar and action-oriented language. The icons are meaningful and distinct from one another. Similarly, Merchant's menu has good, clear icons that are distinct and intuitively understandable.</p>
									<p><strong>Icons that are similar</strong> – Wells Fargo’s transfer page has five actions with icons, two of which show flying money, what does that mean? For first-time users, these similar icons may confuse them and lead them to make mistakes.</p>
									<h4>What’s the harm?</h4>
									<p>The transfer pages on the Chase and Wells Fargo apps and Merchant’s menu follow Hick’s Law, which states that the time it takes to make a decision increases with the number and complexity of choices, by breaking the actions into easier choices. However, with ambiguous iconography, recalling which action is correct for a particular scenario may be difficult. For an action such as making transfers, adding unnecessary friction to the experience does not focus on the user’s goals.</p>

									<h3>Personalization options for power users</h3>
									<p>Users who are on their mobile banking app often may start to feel bogged down by repetitive actions. By adding optional shortcuts or personalization, app designers can cater to experienced users and improve their overall experience.<sup className="inline-refs"><a href="#ref5">[5]</a></sup></p>
									<p>Considerations when assessing <strong>flexibility and efficiency</strong> within an app:</p>
									<ul>
										<li>Beginner, intermediate and expert users have different needs</li>
										<li>Allow multiple ways to accomplish the same task</li>
										<li>Provide shortcuts and personalization for power users</li>
									</ul>
									<figure className="image-full">
										<picture>
											<img src="/images/human-factors-flexibility-efficiency.jpg" alt="Screenshots of personalization within the apps" />
										</picture>
										<figcaption>Figure 2. Personalization in the mobile banking apps</figcaption>
									</figure>
									<h4>Inspecting the banking apps</h4>
									<p><strong>Good contextually placed personalization</strong> – Chase’s dashboard provides personalization and customization that allows experienced users ways to be more efficient. Examples of personalization found in the app:</p>
									<ul>
										<li>Quick actions with the ability to add, delete and reorder</li>
										<li>Set defaults such as showing or hiding labels, choosing the accordion display and recording accounts</li>
										<li>Allow custom labels to adjust the account name for easier scanning</li>
									</ul>
									<p><strong>Hidden personalization features</strong> – Wells Fargo’s dashboard allows for custom account labels, but the controls are hidden within the settings page and not contextually close. The app does not allow for quick actions or setting defaults, like the Chase app.</p>
									<p><strong>No methods to remove irrelevant actions</strong> – Merchant’s dashboard does not allow for any customization. For a user without a credit card with Merchant’s, they show a large action to get a credit score and ask to submit a travel notice if they have upcoming travels; two actions that are often relevant for people with credit cards with the bank. There are no methods to remove irrelevant actions on the dashboard.</p>
									<h4>What’s the harm?</h4>
									<p>Novice users and expert users have different needs and so adding personalization may help make the app more usable for a larger audience. Shortcuts may also help users find buried tasks more easily by allowing them to be pinned to a more accessible location. When an app does not provide personalization and shortcuts, frequent users may become increasingly frustrated and have a more difficult experience using the app.</p>

									<h3>Getting help should be easy</h3>
									<p>It’s best to be clear and not require additional explanation, but often apps need to provide additional support to users who need it.<sup className="inline-refs"><a href="#ref5">[5]</a></sup> Tesler’s Law states that for any system there is a certain amount of complexity which cannot be reduced.</p>
									<p>Mobile banking services a large audience with diverse backgrounds who may need additional support. People using the apps may have language barriers, not understand tax laws, need help understanding fees or legalese and may be seeking support from their bank app.</p>
									<p>Considerations when assessing <strong>help and documentation</strong> within an app, it should:</p>
									<ul>
										<li>Be easy to find – help should not be hidden away in a menu</li>
										<li>Be contextual relevant – the app should provide the help when the user needs it</li>
										<li>Provide concrete next steps – if the action is multi-step, it should guide you through the entire process until you get help</li>
									</ul>
									<figure className="image-full">
										<picture>
											<img src="/images/human-factors-help-documentation.jpg" alt="Screenshots of help and documentation within the apps" />
										</picture>
										<figcaption>Figure 3. Help and documentation in the mobile banking apps</figcaption>
									</figure>
									<h4>Inspecting the banking apps</h4>
									<p><strong>An unhelpful chat bot</strong> – Chase has a digital assistant, or a chat bot, available for you to ask it a question and it provides a response. If the chat bot is not given a question it is programmed to receive, it provides you with suggested questions. In practice, this chat bot is less useful and more burdensome than simply having a frequently asked questions (FAQs) section because recall requires more cognitive effort than recognition. The app also has other support features including FAQs, a series of phone numbers and the ability to schedule an in-person meeting.</p>
									<p><strong>Somewhat useful frequently asked questions</strong> – Wells Fargo has a “Help & Support” section within the menu with documentation and some actions such as making an appointment and finding locations. If you choose to view their FAQs you will see that the primary action on the page is “Download the App”, which is not contextually appropriate because we came from the app. There is some useful documentation including deposit cutoff times and step-by-step instructions for various tasks.</p>
									<p><strong>Popup suggesting you call customer support</strong> – Merchant Bank has very little support within the app. There were some tooltips explaining sections, but the main “Help” button in the menu leads you to a popup suggesting that you call customer service. </p>
									<h4>What’s the harm?</h4>
									<p>Support options for all three apps were inadequate and not especially helpful. Poor assistance for users who are struggling may lead them to not understand features which may prevent them from finishing tasks or cause them to make mistakes. For example, a person may not realize that there’s a limit on the number of transfers allowed for each account until there’s a fee. If they do not realize the rules, and the support does not answer their questions, they might accrue unexpected fees.</p>

									<h2>Conclusion</h2>
									<p>After conducting our usability inspection, we have found instances where mobile banking apps followed human factors and even more cases where they didn’t. We don’t know whether the issues found are a result of deliberate choices made by the banks, or if the issues are due to unforeseen constraints.</p>
									<p>Overall, all three banking apps performed especially poorly when it came to help and documentation. Chase had the most options, but led us to a chat bot that had limited functionality and unclear inputs. When a bank does not provide a customer with the proper support it may lead to real financial consequences, more than just frustrating the person. This is the most critical area that should be addressed in each of these apps.</p>
									<p>The design of the mobile banking experience is much more than what we covered in this inspection. Some other areas that should be explored are:</p>
									<ul>
										<li>Account sign up and login process – have you ever been locked out of your account before?</li>
										<li>Credit card payments – is it clear how much you owe? Are they pushing you to pay a certain amount each month, such as the minimum monthly payment?</li>
										<li>Overdraft fees – banks often allow transactions even if the account balance is too low and charge overdraft fees each time the balance goes below zero.</li>
									</ul>
									<p>Each of these bank apps should conduct their own usability inspection or heuristic evaluation and start a plan to make their products more user-centered. If they start focusing more on human factors then perhaps next time you pull out your phone to transfer money to a friend, they’ll have updated the app so it’s so well-designed that you won’t even notice the interface.</p>

									<article className="references">
										<h2>References</h2>
										<ol>
											<li id="ref1">Bennett, R., & Bennett, K. (2022, September 28). Digital Banking In 2022: Trends And Statistics. Bankrate. Retrieved November 14, 2022, from <a href="https://www.bankrate.com/banking/digital-banking-trends-and-statistics">{'https://www.bankrate.com/banking/digital-banking-trends-and-statistics'}</a></li>
											<li id="ref2">Gupta, S. (2013). The Mobile Banking and Payment Revolution. The European Financial Review, 3-6.</li>
											<li id="ref3">Johnson, J. (2014). Designing with the Mind in Mind: Simple Guide to Understanding User Interface Design Guidelines. Elsevier Science.</li>
											<li id="ref4">Murakami, A., & Burnette, M. (2021, March 25). What Is Online Banking? Definition, Pros and Cons. NerdWallet. Retrieved November 14, 2022, from <a href="https://www.nerdwallet.com/article/banking/pros-cons-online-only-banking">{'https://www.nerdwallet.com/article/banking/pros-cons-online-only-banking'}</a></li>
											<li id="ref5">Nielsen, J. (2020, November 15). 10 Usability Heuristics for User Interface Design. Nielsen Norman Group. Retrieved November 14, 2022, from <a href="https://www.nngroup.com/articles/ten-usability-heuristics">{'https://www.nngroup.com/articles/ten-usability-heuristics'}</a></li>
											<li id="ref6">Norman, D. (2013). The Design of Everyday Things. Basic Books.</li>
										</ol>
									</article>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}

export default HumanFactorsMobileBanking;

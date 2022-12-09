import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	TabContent, TabPane, Nav,
	NavItem, NavLink, Row, Col
} from 'reactstrap';
import classnames from 'classnames';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function Login() {

	// State for current active Tab
	const [currentActiveTab, setCurrentActiveTab] = useState('1');

	// Toggle active state for Tab
	const toggle = tab => {
		if (currentActiveTab !== tab) setCurrentActiveTab(tab);
	}

	return (
		<div style={{display: 'block', width: 700, padding: 30}}>
			<Nav tabs>
				<NavItem>
					<NavLink className={classnames({active:currentActiveTab === '1'})} onClick={() => { toggle('1'); }}> Login </NavLink>
				</NavItem>
				<NavItem>
					<NavLink className={classnames({active:currentActiveTab === '2'})} onClick={() => { toggle('2'); }}>Register</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={currentActiveTab}>
				<TabPane tabId="1">
					<Row>
						<Col sm="12">
                        <LoginForm/>
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="2">
					<Row>
						<Col sm="12">
                        <RegisterForm/>
						</Col>
					</Row>
				</TabPane>
			</TabContent>
		</div >
	);
}

export default Login;

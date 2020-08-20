import {Form} from 'semantic-ui-react'
import Layout from '../components/layout'

export default class Admin extends React.Component{
	state = {value:3}

	handleChange = (e,{value})=> this.setState({value})

	render(){
		const {value} = this.state
		return (
			<Layout>
				<Form>
					<Form.Group widths='equal'>
						<Form.Input fluid label='id' placeholder='id'/>
						<Form.Input fluid label='이름' placeholder='이름'/>
					</Form.Group>
					<Form.Group widths='equal'>
						<Form.Input fluid label='부서' placeholder='부서'/>
						<Form.Input fluid label='직급' placeholder='직급'/>
					</Form.Group>
					<Form.Group widths='equal'>
						<Form.Input fluid label='E-mail' placeholder='E-mail'/>
						<Form.Input fluid label='H.P' placeholder='H.P'/>
					</Form.Group>
					<Form.Group>
						<label>권한</label>
						{[1,2,3,4,5,6,7,8,9].map(it=>(
							<Form.Radio
								label={it}
								value={it}
								checked={value==={it}}
								onChange={this.handleChange}
							/>
						))}
					</Form.Group>
					<Form.Group widths='equal'>
						<Form.Button type='submit'>등록하기</Form.Button>
						<Form.Button type='reset'>취소</Form.Button>
					</Form.Group>
				</Form>
			</Layout>
		);
	}
}

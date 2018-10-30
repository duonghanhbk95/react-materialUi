import React, { Component } from 'react'
import { connect } from 'react-redux'
import { projectHandlers } from '../../state/handles'
import contractABI from '../../contracts/abi.json'

const Web3 = require('web3')

class CreateProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (e) {
    const rpcURL = 'https://rinkeby.infura.io/ed50cb16320943ac97e0337575f836d7'
    const web3 = new Web3(rpcURL)
    // var account = web3.eth.accounts.create();
    const address = '0xaa40f98fbed98ea9960bd4e2996daa2857b58922'
    web3.eth.getBalance(address, (err, wei) => {
      let balance = web3.utils.fromWei(wei, 'ether')
      console.log('balance contract', balance)
    })
    
    const contract = new web3.eth.Contract(contractABI, address)
    contract.methods.delegate(address)
    
    console.log('contract', contract.methods.delegate(address))
    e.preventDefault()
    const { createProject } = this.props
    createProject([this.state])
  }

  handleChange (e) {
    const id = e.target.id
    this.setState({[id]: e.target.value})
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="col s12">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
              <label htmlFor="description">Textarea</label>
            </div>
          </div>
          <div className="input-field">
            <button className="btn waves-effect waves-light" type="submit" name="action">Create Project
            <i className="material-icons right">add_box</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  projects: state.rdProject.project
})

const mapDispatchToProps = {...projectHandlers}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)

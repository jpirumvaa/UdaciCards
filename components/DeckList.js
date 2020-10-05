import React, {Component} from 'react';
import {Text, ScrollView } from 'react-native';
import {connect} from 'react-redux'
import styles from '../utils/styles'
import Card from './Card'
import data from '../utils/dummyData.json'
import {getDecksFromDB} from '../utils/apis'
import {getDecks} from '../actions'



class DeckList extends Component {
    state = {  }
    componentDidMount(){
        const {dispatch}= this.props
        getDecksFromDB().then(decks=>{
            dispatch(getDecks(decks))
        })
    }

    
    render() {
        //console.log("Decks are:", this.props.decks)
        //console.log(data)
        //const data= this.props.decks
        return (
           <ScrollView style={styles.container}>
               <Text style={styles.decks}>Decks</Text>
               {
                   Object.keys(data).map((obj)=>{
                       return(
                            <Card card={obj} key={obj} navigation={this.props.navigation}/>
                       )
                   })
               }
           </ScrollView> 
        );
    }
}

function mapStateToProps (decks) {
    return {
      decks,
    };
}
export default connect(mapStateToProps) (DeckList);

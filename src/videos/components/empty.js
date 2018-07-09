import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

function Empty(props){
	return (
		<View style={styles.containter}>
			<Text style={styles.text}>{props.text}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	containter: {
		padding: 10,
	},
	text: {
		fontSize: 16
	}
})


export default Empty
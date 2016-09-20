//noinspection JSUnresolvedVariable
import React, { Component } from 'react';
import {View, Text,ListView} from 'react-native';

export default class ListViewDemo extends Component {

	constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'Johnkfkkkfkdkfkkdkkfkslkfklldskfk fsfjsjdjkkdfkjkjsjkdfkjskjkjskjdf fdskjfjsdkf kd', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }
    render(){
    	return (
    		<View style={{padding: 5,flex:1}}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData) =>
						<View style={{
							backgroundColor:'#ff22cc',
							justifyContent:'center',
							height:80,
						}}>
							<View style={{
								flex:1,
								backgroundColor:'#ffffcc',
								justifyContent:'center',
								marginBottom:3,
							}}>
								<Text style={{
									// backgroundColor:'#ffccff',
									textAlign:'left',
								}}>
									{rowData}
								</Text>
							</View>
						</View>}
				/>
			</View>
		)

    }
}


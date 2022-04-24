import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button, FlatList } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const { data, addBlogPost } = useContext(BlogContext);
    
    return (
        <View>
            <Text>Index Screen</Text>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList 
                data={data} 
                keyExtractor={blog => blog.title} 
                renderItem={({item}) => {
                    return <Text>{item.title}</Text>;
                }} 
            />
        </View>
    );
};

export default IndexScreen;
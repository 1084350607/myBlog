import React from 'react'
import { 
    BlogItemWrapper,
    TimeCircle,
    BlogItemRight
} from './style'


function BlogItem(props){
    return (
        <BlogItemWrapper>
            <div className='blogItemLeft'>
                <TimeCircle color='#9bf6ff'>{JSON.stringify(props.props)}</TimeCircle>
                <div className='timeLine'></div>
            </div>
            <BlogItemRight bgimage={props.bgimage}>
                <div className="tag-name"><h2><a href="">Tsy</a></h2></div>
                <div className="tag-description">Quis est autem dignus nomine hominis.</div>
            </BlogItemRight>
        </BlogItemWrapper>
    )
}

export default BlogItem
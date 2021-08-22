import React from 'react'
import './Widget.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widget() {
    const widgetArticle=(heading,subheading) =>{
        return (
            <div className="widget-Article">
                <div className="widget__ArticleLeft">
                    <FiberManualRecordIcon/>
                </div>
                <div className="widget__ArticleRight">
                    <h4>{heading}</h4>
                    <p>{subheading}</p>
                </div>
            </div>
        )
    }


    return (
        <div class="widget">
            <div className="widget__header">
                <h2>Linkedin news</h2>
                <InfoIcon />
            </div>
            {widgetArticle("New version of React is released!!",'Top news')}
            {widgetArticle("New version of React is released!!",'Top news')}
            {widgetArticle("New version of React is released!!",'Top news')}
            {widgetArticle("New version of React is released!!",'Top news')}


        </div>
    )
}

export default Widget

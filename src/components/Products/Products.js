import React from 'react'
import './Products.css'
import SearchIcon from '@material-ui/icons/Search';
import AndroidIcon from '@material-ui/icons/Android';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

function Products() {
    return (
        <div className = 'products container'>
            <h1 className = 'heading'>This is new creative process</h1>
            <p className = 'sub-heading'>Products Stories is a all in one solution that converts your Shopify product pages in AMP 
                format and at the same time in Google Story format.</p>
            <div className = 'card-container container'>
            <div className = 'card-component'>
                <SearchIcon className = 'card-icon' style = {{fontSize: '70px'}} />
                <h3 className = 'card-heading'>Learn About Your Creative</h3>
                <p className = 'card-sub-heading'>Monitor your creative health scores internally and against peer benchmarks</p>
            </div>
            <div className = 'card-component'>
                <AndroidIcon  className = 'card-icon' style = {{fontSize: '70px'}} />
                <h3 className = 'card-heading'>Learn About Your Creative</h3>
                <p className = 'card-sub-heading'>Monitor your creative health scores internally and against peer benchmarks</p>
            </div>
            <div className = 'card-component'>
                <TrendingUpIcon className = 'card-icon' style = {{fontSize: '70px'}} />
                <h3 className = 'card-heading'>Learn About Your Creative</h3>
                <p className = 'card-sub-heading'>Monitor your creative health scores internally and against peer benchmarks</p>
            </div>
            </div>
        </div>
    )
}

export default Products

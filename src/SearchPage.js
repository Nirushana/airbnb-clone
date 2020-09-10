import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
// import Search from './Search';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="searchPage">
           <div className="searchPage__info">
                <p>
                    62 stays - 26 august to 30 august - 2 gust
                </p>
                <h2>Stays nearby</h2>
                <Button variant='outlined'>Cancellation Flexibilty</Button>
                <Button variant='outlined'>Tpye of place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and beds</Button>
                <Button variant='outlined'>More filters</Button>
            </div> 
            <SearchResult 
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Private room in center of Colombo"
                title="Independant luxury studio apartment"
                description="2 guest - 3 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free Parking - Washing Machine"
                star={4.73}
                price="1500.00LKR/night"
                total="3000.00LKR total"

            />

            <SearchResult 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of Colombo"
                title="Stay at this spacious Edwardian House"
                description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free Parking - Washing Machine"
                star={4.2}
                price="2500.00LKR/night"
                total="5000.00LKR total"

            />

<              SearchResult 
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Private room in center of Colombo"
                title="Colombo Studio Apartment"
                description="4 guest - 4 bedroom - 4 bed - 2 bathrooms - Wifi - Kitchen - Free Parking - Washing Machine"
                star={4.73}
                price="6000.00LKR/night"
                total="12000.00LKR total"

            />

            <SearchResult 
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Private room in center of London"
                title="30min to Colombo Unversity"
                description="1 guest - 1 bedroom - 1 bed - 1  bathrooms - Wifi - Kitchen - Washing Machine"
                star={4.73}
                price="500.00LKR/night"
                total="3000.00LKR total"

            />
        </div>
    )
}
 
export default SearchPage

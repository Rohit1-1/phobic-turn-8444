
import { Box, Button, Image, Input, Text } from '@chakra-ui/react';
import React, { Component } from 'react';
import { Data, DataA } from './ItemCollection';
import "./Health.css";
import Navbar from '../Navbar';

class HealthCenter extends Component {
    state = { searchInput: '', alphabet: '' };
    onSearchInputChange = (e) => {
        this.setState({ searchInput: e.target.value })
    }
    onAlphabetClick = (e) => {
        this.setState({ alphabet: e.target.value })
    }
    prepareAlphabets = () => {
        let result = [];
        for (let i = 65; i < 91; i++) {
            result.push(
                // <Box w="90%" >
                <Button border="solid 1.7px red" boxSize="30px" borderColor="tomato" color="tomato" margin="5px" padding="20px" fontSize="18px" fontWeight="550" type="button" key={i} onClick={this.onAlphabetClick} value={String.fromCharCode(i)} >{String.fromCharCode(i)}</Button>
                // </Box>
            )
            // Bag[i];
        }

        // console.log(result[i]);
        return result;
    }

    elementContainsSearchString = (searchInput, element) => (searchInput ? element.name.toLowerCase().includes(searchInput.toLowerCase()) : false);

    filterItems = (itemList, ListA) => {
        let result = [];
        const { searchInput, alphabet } = this.state;
        if (itemList && (searchInput || alphabet)) {
            result = itemList.filter((element) => (element.name.charAt(0).toLowerCase() === alphabet.toLowerCase()) ||
                this.elementContainsSearchString(searchInput, element));
        } else {
            result = ListA || [];

        }
        result = result.map((item) => (
            <div className='Data' >
                <Box display="flex" >
                    <Box margin="auto">
                        <Image src={item.image} alt="" />
                    </Box>
                    <Box >
                        <Box
                            // border="solid 1px yellow" 
                            paddingLeft="10px">
                            <Text fontSize="17px" color="rgb(100,90,80)" textAlign="start" fontWeight="600">
                                {item.name}
                                {/* <a href={item.link}>a</a> */}
                            </Text>
                        </Box>
                        <Box
                            // border="solid 1px brown" 
                            paddingLeft="5px">
                            <Text fontSize="13px" color="gray" textAlign="start">
                                {item.des}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </div>)
        )
        return result;
    }

    render() {

        const itemList = Data;
        const ListA = DataA;
        // const itemList = undefined;
        const filteredList = this.filterItems(itemList, ListA);

        return (
            <>
            <Navbar/>
                <div className='diseaseBox'>
                    {/* <input type="search" placeholder='Search' onChange={this.onSearchInputChange} /> */}
                    <Text w="90%" margin="auto" paddingTop="20px" paddingBottom="20px" textAlign="start" fontSize="28px">
                        Disease Index starting with - {this.state.alphabet}
                    </Text>
                    <Box w="97%" margin="auto" padding="1.1%"
                        // border="solid 1px brown"
                        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" backgroundColor="white">
                        {this.prepareAlphabets()}

                    </Box>

                    <Box marginTop="20px" marginBottom="20px" marginLeft="10%" textAlign="start">
                        <Input className='SearchBox' type="search" padding="10px" placeholder='Search' onChange={this.onSearchInputChange} />
                    </Box>

                    <Box className='Grid' display="grid">
                        {filteredList}
                    </Box>
                </div>
            </>
        );
    }
}

export default HealthCenter;
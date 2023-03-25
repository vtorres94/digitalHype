import React, { useState } from "react";
import { Grid, Header, Input, Label } from 'semantic-ui-react';
import IData from "../../../models/data.model";

interface IState {
    data: IData;
}

const initialData = {
    id: "",
    first_name: "",
    last_name: ""
}

const Strings: React.FC = () => {

    const [state, setState] = useState<IState>({
        data: initialData
    })

    const destructure = (str:string) => {
        let data:IData = initialData;
        const words = str.split('0');

        if(!words || words.length === 1) {
            data.id = "";
            data.first_name = str;
            data.last_name = "";
            setState({
                data
            })
            return
        }

        let counter = 0;
        words.forEach((word: string) => {
            switch(counter) {
                case 0:
                    data.first_name = word;
                    break;
                case 1:
                    data.last_name = word;
                    break;
                case 2:
                    data.id = word;
                    break;
                default:
                    return
            }

            if(word !== ""){
                counter ++;
            }

        })
        
        setState({
            data:data
        })

    }

    return(
        <Grid textAlign="center">
            <Grid.Row>
                <Grid.Column>
                    <Header>
                        Strings destructure
                    </Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Input
                        label='String'
                        onChange={(e) => {
                            destructure(e.target.value)
                        }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    {`{
                        "first_name"="${state.data.first_name}",
                        "last_name"="${state.data.last_name}",
                        "id"="${state.data.id}"
                    }`}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default Strings;
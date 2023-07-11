import { Container, Grid, Header, List } from "semantic-ui-react";

function Blog(props){

    const shoot = () => {
        alert("Great Shot!");
      }
    
    const display = (blog_data)=>{
        console.log("blog data: ", blog_data)
    }

    const find_event = (x,y)=>{
        console.log("event type: ", y.type)
        console.log("msg: ", x)
    }

    return  <>
            {/* <h1>I am {props.blog_name} </h1> */}
            <button onClick={shoot}>click</button>
            <br></br>
            <button onClick={()=> display(props.blog_data) }>click data</button>
            <br></br>
            <button onClick={(event)=> find_event("Hello", event) }>check event</button>
            <br></br>
            <Container>
                <Grid>
                <Grid.Row>
                    <Grid.Column>
                    <Header>List</Header>
                    <List>
                        {props.blog_data.map(el => {
                        return (
                            <List.Item  key={el.id}>
                            <List.Content>
                                {el.name} {el.mobile}
                            </List.Content>
                            {/* <List.Content>{el.phone}</List.Content> */}
                            </List.Item>
                        );
                        })}
                    </List>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Container>
            </>
}

export default Blog;
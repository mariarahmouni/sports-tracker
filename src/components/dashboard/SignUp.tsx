import { Box, Container, Group, Card, Image, Text, Badge, Button } from "@mantine/core";
import classes from '../../styles/SignUp.module.css';

const SignUp = (): JSX.Element => {
    return (
        <div className={classes.wrapper}>
            <Card className={classes.card}>
                
                <Group mt="md" mb="sm">
                    <Text w={500}>Sign Up</Text>
                </Group>

                <Text size="sm" >
                    With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                    activities on and around the fjords of Norway
                </Text>

                <Button color="green" radius="xl">
                    Get Started
                </Button>
            </Card>

        </div>
    );
}

export default SignUp;
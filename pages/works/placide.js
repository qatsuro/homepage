import { Container, Badge, Link, List, ListItem, Divider } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import React from 'react';

const Placide = () => (
  <Layout title="Placide">
    <Container>
      <Title>
        Superior firearms <Badge>November 2021</Badge>
      </Title>
      <Divider my={2} />
  
      <P>
        Placide Quality Tools & Advices is a magazine diferent building tools . I built its HTML coding.
      </P>
      <Divider mt={6} />
  
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://placide.com/">
            https://placide.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JavaScript</span>
        </ListItem>
      </List>
      
      <WorkImage src="/images/placide.jpg" alt="Placide" />
    </Container>
  </Layout>
)

export default Placide
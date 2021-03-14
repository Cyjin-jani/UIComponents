import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const MyCard = styled(Card)`
  && {
    box-shadow: none;
  }
  border: 1px solid red;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 100%;
  
`;

const ImageBox = styled(CardMedia)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled(CardContent)`
  border: 2px solid green;
`;

const Title = styled(Typography)`
  color: purple;
  overflow: hidden;
  position: relative; 
  line-height: 1.2em;
  max-height: 2.4em; 
  text-align: justify;
  margin-right: -1em;
  padding-right: 1em;
  
  &:before {
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .&:after {
    content: '';
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    background: white;
  }
`;

const DcRatio = styled(Typography)`
  color: red;
`;

const PriceCaption = styled(Typography)`
  color: yellow;
  background-color: black;
`;

const Price = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
`;


const ProductCard = () => {
  return ( 
  <>
  <StylesProvider injectFirst>
    <MyCard>
        <CardActionArea>
          <ImageContainer>
            <ImageBox
              image="https://www.tasteofhome.com/wp-content/uploads/2018/05/Unicorn-Cake_EXPS_HCA18_223966_D02_22_2b-1.jpg"
              title="Contemplative Reptile"
            />
          </ImageContainer>
          <ContentContainer>
            <Title gutterBottom variant="body1" component="p">
            케이크 케이크케이크 케이크케이크 케이크케이크 케이크케이크 케이크케이크 케이크케이크 케이크케이크 케이크케이크 케이크케이크 케이크케이크 케이크케이크 케이크
            </Title>
            <DcRatio variant="body2" component="span">
             30%
            </DcRatio>
            <PriceCaption variant="body2" component="span">
             45,000
            </PriceCaption>
            <Price variant="h2" component="p">
              38,900 원
            </Price>
            
          </ContentContainer>
        </CardActionArea>
    </MyCard>
  </StylesProvider>
  </>
  )
}

export default ProductCard;
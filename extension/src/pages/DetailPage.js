import styled from "styled-components";
import { BsBackspaceFill } from "react-icons/bs";
import { useEffect } from "react";

const DetailPage = (props) => {
  const onClickHandler = () => {
    props.showDetail(false);
  };

  useEffect(() => {}, [props]);

  return (
    <Container>
      <Text>
        <div onClick={onClickHandler}>
          <BsBackspaceFill />
          <span>Back to Home</span>
        </div>
        <div>Problem Statement</div>
        <div>{props.content !== undefined && props.content[0]}</div>
        <div>Example 1:</div>
      </Text>
      <Sandbox>
        <SandboxText>
          {props.content !== undefined && props.content[1]}
        </SandboxText>
      </Sandbox>
      <img src="https://i.stack.imgur.com/TXGoT.png" alt="" />
      <a href={props.content !== undefined && props.content[2]} target="_blank">
        Learn More
      </a>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;

  img {
    margin-top: 30px;
    width: 90%;
  }

  a {
    text-align: right;
    margin-top: 20px;
    margin-right: 50px;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Text = styled.div`
   svg {
    color: grey;
   }

   > div:nth-child(1) {
    display: flex;
    align-items: center;
    cursor: pointer;
  
    span {
      margin-left: 8px;
      font-weight: 600;
    }
  }

  > div:nth-child(2) {
    margin-top: 45px;   
    margin-bottom: 15px;
    font-weight: 600;
    text-align: center;
    font-size: 1.3em;
    width: 450px;
  }

  > div:nth-child(3) {
    margin-bottom: 30px;
    color: rgb(85, 85, 85);
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    width: 450px;
  }

  > div:last-child {
    font-weight: 600;
    color: rgb(10, 10, 10);
    font-size 0.9em;
    margin-bottom: 5px;
  }
`;

const Sandbox = styled.div`
  width: 90%;
  height: 70px;
  background: rgb(10, 10, 10);
  border: 1px grey solid;
  margin-bottom: 20px;
`;

const SandboxText = styled.div`
  margin-left: 10px;
  margin-top: 15px;
  color: rgb(53, 192, 161);
  letter-spacing: 0.1px;
`;

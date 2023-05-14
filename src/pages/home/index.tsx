import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Tag,
  useToast,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import { LinkType } from "../../firebase/type/link";
import { LinkCollection } from "../../firebase/collection/link";
import onToast from "../../component/onToast";
import axios from 'axios';
import { UserCollection } from "../../firebase/collection/user";

// const arr = ["사진", "구글", "개발", "학교", "Front", "Back", "DB"]

const Home = () => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [option, setOption] = useState("");
  const [inputText, setInputText] = useState("");

  const toast = useToast()

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleConfirmation = () => {
    
  };

  useEffect(() => {
    getTabUrl(function(url : string) {
      setCurrentUrl(url)
    });
  }, []);


  const [tagList, setTagList] = useState<string[]>([])
  useEffect(() => {
    getUserTagList("mXjlGHOIDkjz7YMuofHU");
  }, []);
  const getUserTagList = async (userId: string) => {
    const userData = await UserCollection.readUser(userId);
    setTagList(userData ? userData.tagList : []);
  };

  function getTabUrl(callback : any) {
    var queryInfo = {
      active : true,
      currentWindow : true
    };
    chrome.tabs.query(queryInfo, function(tabs) {
      var tab = tabs[0];
      var url = tab.url;
      callback(url);
    });
  }

  const [tag, setTag] = useState("Tags")


  const addLinkData = async (linkData: LinkType) => {
    LinkCollection.addLink("mXjlGHOIDkjz7YMuofHU", linkData);
  };

  const sendData = async (data: LinkType) => {
    const endpoint = "http://43.200.213.0:8000/slack";
    try {
      const response = await axios.post(endpoint, data);
      console.log("Data sent successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%", padding: '10px' }}>
      <div style={{ width: "300px", height: "200px" }}>
        <div style={{width: '100%', background: '#1C4163'}}>
        <h1 style={{ width: '100%', textAlign: "center", fontWeight: "bold", fontSize: "24px", color: 'white' }}>
          HASHLINK
        </h1>
        </div>
        
        <h1 style={{fontFamily : 'Pretendard', fontSize : '14px', marginTop: '12px', marginBottom: '12px'}}>URL: {currentUrl}</h1>
        <div style={{display : 'flex', flexDirection: 'column'}}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {tag}
          </MenuButton>
          <MenuList>
            {tagList.map((item, index) => {
              return (
                <MenuItem key={index} onClick={() => setTag(item)}>
                  {item}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
        <Button
          onClick={() => {
            const trimmedUrl = currentUrl.replace("https://", "");
            const domain = trimmedUrl.substring(
              0,
              trimmedUrl.lastIndexOf(".")
            );
            const title = domain.split(".").join(".");
            addLinkData({ url: currentUrl, tag: [tag], title: title });
            onToast({ toast: toast, status: "success", title: "입력 완료!" });
            sendData({ url: currentUrl, tag: [tag], title: title });
          }}
          mt = '20px'
          w = '100%'

        >
          확인
        </Button>
        </div>
        
       
      </div>
    </div>
  );
};

export default Home;

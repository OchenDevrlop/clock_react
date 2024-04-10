import React from 'react';
import './Clock.css';
import { Flex, theme } from 'antd';
import ConfigProvider from 'antd/es/config-provider';
import Layout from 'antd/es/layout/layout';
import type { TimePickerProps } from 'antd';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
// const alarmSoudPath = require("./alarm.mp3");

dayjs.extend(customParseFormat);

const onChange: TimePickerProps['onChange'] = (time, timeString) => {
  console.log(time, timeString);
};

function Clock() {

    const [time, setTime] = React.useState<string[]>(["00", "00", "00"]);

    React.useEffect(() => {
      document.title = time[0][0].concat(time[0][1], " : ", time[1][0], time[1][1], " : ", time[2][0], time[2][1]);
    })

    React.useEffect(() => {
      setTime(
        new Date().toTimeString().split(":")
      );
    }, [])

    setInterval(() => {
      setTime(
        new Date().toTimeString().split(":")
      );
    }, 1000);

    const onChange: TimePickerProps['onChange'] = (time, timeString: any) => {
      let timeArray = timeString.split(":");
      console.log(timeArray);
    };

    return (
      <ConfigProvider theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#aaa",
        }
      }}>
        <Flex justify='space-evenly' align='center' wrap='wrap' vertical={true} style={{width: "100%", height: "100%"}}>
          <Flex justify='center' align='center' style={{width: "50%", height: "20%", backgroundColor: 'transparent', fontFamily: "inherit !important", fontWeight: "700"}}>
            <Layout style={{padding: "60px 40px", color: "#fff", borderRadius: "11px", backgroundColor: "#0000008f", margin: "0 10px", fontSize: "70px", textAlign: "center"}}>
              {time[0][0]}
            </Layout>
            <Layout style={{padding: "60px 40px", color: "#fff", borderRadius: "11px", backgroundColor: "#0000008f", margin: "0 10px", fontSize: "70px", textAlign: "center", marginRight: "0"}}>
              {time[0][1]}
            </Layout>
            <Layout style={{padding: "60px 20px", color: "#fff", borderRadius: "11px", backgroundColor: "transparent", margin: "0", fontSize: "70px", textAlign: "center"}}>
              :
            </Layout>
            <Layout style={{padding: "60px 40px", color: "#fff", borderRadius: "11px", backgroundColor: "#0000008f", margin: "0 10px", fontSize: "70px", textAlign: "center", marginLeft: "0"}}>
              {time[1][0]}
            </Layout>
            <Layout style={{padding: "60px 40px", color: "#fff", borderRadius: "11px", backgroundColor: "#0000008f", margin: "0 10px", fontSize: "70px", textAlign: "center", marginRight: "0"}}>
              {time[1][1]}
            </Layout>
            <Layout style={{padding: "60px 20px", color: "#fff", borderRadius: "11px", backgroundColor: "transparent", margin: "0", fontSize: "70px", textAlign: "center"}}>
              :
            </Layout>
            <Layout style={{padding: "60px 40px", color: "#fff", borderRadius: "11px", backgroundColor: "#0000008f", margin: "0 10px", fontSize: "70px", textAlign: "center", marginLeft: "0"}}>
              {time[2][0]}
            </Layout>
            <Layout style={{padding: "60px 40px", color: "#fff", borderRadius: "11px", backgroundColor: "#0000008f", margin: "0 10px", fontSize: "70px", textAlign: "center"}}>
              {time[2][1]}
            </Layout>
          </Flex>
          <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} placeholder='Pick a time for alarm ...' size='large' style={{width: "20%", fontFamily: "inherit"}} />
        </Flex>
      </ConfigProvider>
    );

  }

export default Clock;
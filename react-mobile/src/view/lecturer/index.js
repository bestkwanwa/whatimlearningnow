import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Frame from '../../common/component/Frame';
import useLecturers from '../../store/action/lecturers';
import LecturerTab from './tab';
import Join from './jion';
import Footer from './footer';
import LecturerAlert from './alert';
import "../../common/css/teacher.css";
export default function LecturerPage() {
    const { data } = useSelector(state => state.lecturers)
    const [show, setShow] = useState(false);
    const [alertDate, setAlertData] = useState(null);
    function showAlert(data) {
        setAlertData(data);
        setShow(true);
    }
    function hideAlert() {
        setShow(false);
    }

    let newData = [];
    // 3个分一组
    for (let i = 0; i < data.length; i += 3) {
        let newArr = [];
        let end = i + 3;
        end = end > data.length ? data.length : end;
        for (let j = i; j < end; j++) {
            newArr.push(data[j]);
        }
        newData.push(newArr);
    }
    console.log('length', data.length);
    const getLectures = useLecturers()
    useEffect(() => {
        getLectures()
    }, [])
    return (
        <div>
            <Frame>
                <div className="teacher_banner">
                    <h2><span>妙味团队</span></h2>
                    <LecturerTab
                        data={data}
                        newData={newData}
                        showAlert={showAlert}
                    />
                </div>
                <Join />
                <Footer />
            </Frame>
            {show ? <LecturerAlert
                data={alertDate}
                hideAlert={hideAlert}
            /> : ""}
        </div>
    )
}
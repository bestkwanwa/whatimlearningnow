import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Frame from '../../common/component/Frame';
import useLecturers from '../../store/action/lecturers';
import LecturerTab from './tab';
import Join from './jion';
import Footer from './footer';
import "../../common/css/teacher.css";
export default function LecturerPage() {
    const { data } = useSelector(state => state.lecturers)
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
        <Frame>
            <div className="teacher_banner">
                <h2><span>妙味团队</span></h2>
                <LecturerTab data={data} newData={newData} ></LecturerTab>
            </div>
            <Join></Join>
            <Footer></Footer>
        </Frame>
    )
}
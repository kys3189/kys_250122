import React from 'react';

const User = ({user}) => {

    const {name, phone, company, city, address} = user;

    return (
        <li>
            <p>이름 : {name}</p>
            <p>전화번호 : {phone}</p>
            <p>회사의 이름 : {company.name}</p>
            <p>도시 이름 : {address.city}</p>
        </li>
    );
};

export default User;
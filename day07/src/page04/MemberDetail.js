import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MemberDetail = () => {
    const {memberId} = useParams()

    const [memberDTO, setMemberDTO] = useState({})
    const { name, email, phone, website  } = memberDTO

    const navigate = useNavigate

    useEffect(() => {
        axios.get('https://koreanjson.com/users/${memberId}')
        .then(res => setMemberDTO(res.data))
    },[])

    const css ={
        border: '1px solid cyan',
        margin: 20,
        padding: '20px'
    }

    const onBack = () => {
        navigate(`/member/${id}`)
    }
 
    return (
        <div style={ css }>
            <h2>MemberDetail Page: {memberId}</h2>
            <h4>이름: { name }</h4>
            <ul>
                <li>이메일:{email} </li>
                <li>핸드폰:{phone} </li>
                <li>웹사이트: {website}</li>

            </ul>
            <p><Link to={`/member/${id}`}>상세보기</Link></p>
            <button onClick={ onBack }>뒤로</button>
        </div>
        
    );
};

export default MemberDetail;
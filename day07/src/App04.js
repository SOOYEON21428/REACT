import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Main from './page04/Main';

const App04 = () => {
    return (
        <BrowserRouter>
        <>
        </>
            {/* 화 에 보이는 영역 */}
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/member' />
                    <Route path=':memberId' element={<MemberDetail />} />
            </Routes>
        
    </BrowserRouter>
    );
};

export default App04;
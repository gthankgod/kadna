import React, { createContext, useState } from 'react';

export const TeamContext = createContext();

const TeamContextProvider = (props) => {
    const [team, setTeam] = useState(
        [
            {
                id: 1, name: 'HRH Oba Kolapo Adegboyega Ibiyemi', title: 'CHAIRMAN ( FCIA,FCAN,FMNIM,MIMC )', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579685708/WhatsApp_Image_2020-01-21_at_2.01.53_AM_ncujqq.jpg', profile: `Oba Kolapo A. Ibiyemi is the chairman and founder of Kadna Ventures Ltd. During his carrier , he joined Dantata Group of companies in 1981 as an assistant accountant and later  joined Dangote group in 1989 as an accountant and rise to the top of his carrier as Head of special duty and executive assistant to the vice president Dangote group. In 2001 he was nominated has the head of the traditional ruling house Abon Royal ile ife by the council 2006 and in 2010 he was called to rule his father kingdom as the first Alara of Araromi Oke Odo ife south by HRM Oba Okunade Sijuade and the then Governor of Osun State Prince Dr. Olagunsoye Oyinlola.
            Oba Kolapo is a chartterd accountant by profession. He studied at Ambrose Alli university and Federal University of technology oweri. He his a member of many professional bodies. He his a philanthropist , an administrator of repute  , result oriented etc.`, show: false
            },
            {
                id: 2, name: 'Mr Sooko Adefolahan Ibiyemi', title: 'VICE-CHAIRMAN ( FCA )', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1581762329/vc_rijpxq.jpg', profile: `No provided yet`, show: false
            },
            {
                id: 3, name: 'Prince Ibrahim Adeniyi Ibiyemi', title: 'MD/CEO', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579685707/gmd_qscfxj.jpg', profile: `He is an entrepreneur and business mogul. He has worked with many multinational companies before joining the Dangote group 2014. With his commitment and edibility towards his career the company has sponsored him for some courses which are  Workplace Ethics and Attitudinal Change for Productivity Improvement Lagos, London Academy Business School (Diploma) chattered logistics and transport management and climb the ladder to become the depot manager for 2 depots ile ife and ilesa depot until his resignation in 2019 when he was appointed by the board has the group managing director / chief executive officer of the company. In 2018 he was appointed has the national leader for Yoruba Race (YRDF). He his a graduate of politics and international relation, Lead City University ibadan and proceed for his MSc Risk and Disaster Management (professional) osun state university. He his a member Risk Management Association of Nigeria (RIMAN).
                He is also a senior member and contributor in international and scientific research in which he has contributed with his book to move the national and international government forward on development in Africa. Mr. Ibrahim is a very agile and committed young man with a trait of a true business man.`, show: false
            },
            {
                id: 4, name: 'Olori Ajoke Awolade', title: 'ED FINANCE', imgUrl: 'https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg', profile: `She has a Bachelor of Science degree in Banking and Finance from the Faculty of Management Science, Olabisi Onabanjo University, Ago-iwoye, Ogun State. In her quest to be the best at what she does she went further to write the Chatered Institute of Bankers of Nigeria (FCIBN) exam at different stages and became qualified as a chartered banker in 2011.
                She worked in a few organizations; investment company as an auditor (Internal Control Unit), marketing of financial products and also as an administrative officer in private firms.
               Being a professional banker, she sees participating in different workshops and seminars of the institute as a vital ingredient in capacity building,this has given her certification in 'Establishing and Managing SMEs Profitably', 'Loan Disbursement Strategies e.t.c.
                  Presently, she has ventured into her self owned fashion business with the business name Greater Glory Fashion World, a business that has to do with creativity, garment making and skills acquisition. With this she has been clothing the needy,empowering youths to acquire skills in the fashion axis and also  teaching them the business aspect of fashion and how to fund SME thereby sensitising them on how to assess loan for their small scale businesses`, show: false
            },
            {
                id: 5, name: 'HON TAIWO OLORUNDARE', title: 'NON-EXECUTIVE', imgUrl: 'https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg', profile: `Hon. Taiwo holds a BSc in Geography and Regional Planning, MSc Urban Traffic and Transportation planning. He has worked in various organizations in Nigeria and also serve in different bodies. He his a member of various professional bodies and later was appointed as the senior special adviser to the deputy governor of Ekiti state on special duty in 2017.
                He has over 16 years working experience in media and publicity until his appointment as non executive in 2020 by the board`, show: false
            },
            {
                id: 6, name: 'MR Olamide .O.Fasipe', title: 'ED LOGISTICS AND SUPPLY CHAIN MANAGEMENT', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579353385/PHOTO-2019-12-22-08-23-56_1_netkrn.jpg', profile: `Olamide is currently the Executive Director, Logistics and Supply Chain Management. Prior to his appointment
                with Kadna Ventures Limited, he established Ponidam Concepts LTD and worked as a Managing Partner where he was responsible for delivering extraordinary customer support across a range of ERP software technologies.
                He also worked at Tociano Nigeria Limited as the Head of Stock Unit where he oversees the activities of multiple retail outlets and the day to day flow of merchandise
                from the point of delivery to approved destination and the overall performance of the procurement, logistics and stock team.
                He helped set up processes, policies and procedures and put systems in place in line with the company’s strategies and Business Plan as the Project/Operations Manager for
                JCCC LTD/GTE (Chams PLC). Olamide started his working career at KGM Industries (Nig) Ltd (Manufacturing and FMCG) as a Stock Control Officer where he learned the
                basics of store management and logistics.
                He has a Master in Business Administrations M.B.A. Specialization (International Business Management &amp; Corporate Strategy) from the Lagos State University.
                A Graduate and Associate member of the Chartered Institute of Purchasing and Supply Management of Nigeria (CIPSMN). He his Occupational Safety and Health (OSHA) and
                HSE Certified from the International Association of Safety Professionals (IASP USA). A CRM &amp; Project Management Trained and a Supply Chain Management &amp; Logistics
                Specialist.
                Olamide has 15 years’ experience in (Procurement, Operations, Logistics, Warehouse &amp; Inventory Management). He is an enthusiastic, dedicated professional and an exceptional leader with various areas of expertise and skill sets. He performs effectively
                even within a highly coerced setting. Olamide is currently married with Children`, show: false
            },
            {
                id: 7, name: 'MR YAHAYA ISHAQ HUSSAIN', title: 'ED MARKETING AND SALES', imgUrl: 'https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg', profile: `He holds a B.Sc. Degree from Bayero University, Kano. He
                attended many courses including with United States Agency for International development. He had over ten years’ experience in Banking and Telecoms. Among organizations he worked with is Guaranty Trust bank as Relationship Manager, Etisalat Nigeria etc`, show: false
            },
            {
                id: 8, name: 'Mr Kwame Senou', title: 'ED STRATEGIC AND INTERNATIONAL AFFAIRS', imgUrl: 'https://res.cloudinary.com/dnmaekeqy/image/upload/v1579353446/IMG-20200105-WA0001_ffs5xh.jpg', profile: `Mr Kwame Senou is an Entrepreneur and Business leader. He has worked with many multinational companies like Omnicom, Starcom Media Vest, Havas Africa , profit and non-profit organization , Harmonies Media Group (HMG), Gazelle Touch and Opinion until he was appointed in kadna ventures limited has head of Strategic and International Affairs. Kwame Senou is active in professional services with a focus on consumer and political data, marketing services, internet platforms and content industries.
                Kwame Senou has a private law master degree from the University of Abomey-Calavi and has taken Executive Education programs with Harvard Business School and The Wharton School in business strategy and Leadership.
                He is the President of Kundi Africa Foundation, and a charter member of the Lions Club. He was selected by the US Department of State to attend the 2017 Global Entrepreneurship Summit in Hyderabad, India. He has also been a juror in 2018 and 2019 for the Pitcher Awards during the Creativity Week in Nigeria. He has worn numerous awards and he his committed to building tech and data school to train the next generation of professional services experts in the region.`, show: false
            },
            {
                id: 9, name: 'MR OLAOYE THOMAS OYELERE', title: 'ED NATIONAL COORDINATOR', imgUrl: 'https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg', profile: `He has a Bachelor of Arts degree in ( English Language) from the Department of Modern European Languages, University of Ilorin and a Master's degree in Public Administration from the same University.
                He has worked in different organizations with myriads of experiences at different levels, serving in different capacities and has also attended different workshops cum seminars such as: 
                'Character, Value and Work Ethics' by African Development Solutions International.'Leadership Roles in A Team/Organization'     by Global Outsourcing Services Limited. 'Workplace Ethics and Attitudinal Change for Productivity Improvement'    by   HAMMADOS CONSULTANT.
                He was the President of Association of Masters' in Public Administration Students ( AMPAS) 2002-2003. The Secretary General, General Staff Meeting: Integrated Microfinance Bank, Sabo Branch, Yaba(2008- 2009)
                The Secretary Welfare Committee : Integrated Microfinance Bank, Sabo Branch, Yaba,( 2008-2009). He is also a Member NIGERIAN INSTITUTE OF MANAGEMENT ( CHARTERED)
                He is a an astute administrator, who is tested and trusted with  broadened and widened vistas.`, show: false
            }
        ]
    );

    function showText(id) {
        setTeam(team.map(item => item.id === id ? { ...item, show: !item.show } : { ...item }));
    }

    return (
        <TeamContext.Provider value={{ team, showText }}>
            {props.children}
        </TeamContext.Provider>
    )
}

export default TeamContextProvider;
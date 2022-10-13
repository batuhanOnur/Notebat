import renderer from 'react-test-renderer';
import AuthNotification from '../components/notifications/AuthNotification'

// mock useNavigate
const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
 }));

it('Success create notification', () => {
    renderer.create(
     <AuthNotification 
     title={"Login Succesful"}
     message={"Redirect to Home Page"}
     color={"green"}
     autoClose={2000}
     navigateTo={"boards"}
     />
  );
  
});
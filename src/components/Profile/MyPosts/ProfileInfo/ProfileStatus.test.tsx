import {ProfileStatus} from "./ProfileStatus";
import {create} from "react-test-renderer";

describe("ProfileStatus component", () => {
    // test('status from props be in the state', () => {
    //     const component = create(<ProfileStatus status='YOLO' updateStatus={(status) => true}/>);
    //     const instance = component.getInstance();
    //     // expect(instance?.state.status).toBe('YOLO')
    // })
    test('after creation span should be displayed', () => {
        const component = create(<ProfileStatus status='YOLO' updateUserStatus={() => true}/>);
        const root = component.root
        let span = root.findByType('span');
        expect(span).not.toBeNull()
    })
    test('after creation input should not be displayed', () => {
        const component = create(<ProfileStatus status='YOLO' updateUserStatus={() => true}/>);
        const root = component.root
        expect(() => {
            let input = root.findByType('input');
        }).toThrow()
    })
    test('after creation span should contain correct status', () => {
        const component = create(<ProfileStatus status='YOLO' updateUserStatus={() => true}/>);
        const root = component.root
        let span = root.findByType('span');
        expect(span.children[0]).toBe('YOLO')
    })
    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status='YOLO' updateUserStatus={() => true}/>);
        const root = component.root
        let span = root.findByType('span');
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('YOLO')
    })
    // test('callback should be called', () => {
    //     const mockCallBack = jest.fn()
    //     const component = create(<ProfileStatus status='YOLO' updateStatus={mockCallBack}/>);
    //     const instance = component.getInstance();
    //     // instance.deactivateEditMode();
    //     expect(mockCallBack.mock.calls.length).toBe(1)
    // })
})
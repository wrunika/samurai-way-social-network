import {Paginator} from "./Paginator";
import {create} from "react-test-renderer";


describe("Paginator component tests", () => {
    test("pages count is 11 but should be showed only 10", () => {
        const component = create(<Paginator  currentPage={1} onPageChanged={() => {}} pageSize={1} portionSize={10} totalItemsCount={11}/>);
        const root = component.root;
        let spans = root.findAllByType("span");
        expect(spans.length).toBe(10);
    })
    test("if pages count is more than 10 button NEXT should be present", () => {
        const component = create(<Paginator currentPage={1} onPageChanged={() => {}} pageSize={1} portionSize={10} totalItemsCount={11}/>);
        const root = component.root;
        let button = root.findAllByType("button");
        expect(button.length).toBe(1);
    })
})
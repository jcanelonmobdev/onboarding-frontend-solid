import { act } from "react-dom/test-utils";
import HomePage from "../HomePage";
import { render } from "react-dom";
import { CharactersResponse, CharactersUseCase } from "../../../domain/usecase/CharactersUseCase";
import { CHARACTERS_LIST } from "../../../domain/entity/__tests__/__mocks__/characters";
jest.mock("../../../domain/usecase/CharactersUseCase")


describe('HomePage', () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
        mockCharactersUseCase()
    })

    const mockCharactersUseCase = () => {
        // @ts-ignore
        CharactersUseCase.mockImplementation(() => {
            return {
                list: (): Promise<CharactersResponse> => {
                    return Promise.resolve({results: CHARACTERS_LIST})
                }
            }
        })
    }


    it ('Home snapshots', async () => {
        await act(()=> {
            const element = <HomePage/>
            render(element, container)
        })
        expect(container).toMatchSnapshot()
    })

    it ('HomePage renders correct cards number', async() => {
        await act(()=> {
            const element = <HomePage/>
            render(element, container)
        })
        const cards = document.querySelectorAll('.character-card')
        expect(cards.length).toBe(CHARACTERS_LIST.length)
    })
})

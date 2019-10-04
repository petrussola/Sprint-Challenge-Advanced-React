import React from "react";
import * as rtl from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import PlayerCard from "../Playercard";

jest.mock("axios", () => {
  return {
    get: () => {
      return Promise.resolve({
        data: [
          {
            name: "Alex Morgan",
            country: "United States",
            searches: 100,
            id: 0
          }
        ]
      });
    }
  };
});

let tools;

beforeEach(() => {
    rtl.cleanup();
    tools = rtl.render(<PlayerCard player={{
        name: "Alex Morgan",
        country: "United States",
        searches: 100,
        id: 0
      }} />);
});

describe('Players List', () => {
    it('can render players that come from api', () => {
        const elementWithPlayer = tools.queryByText(/alex/i);
        expect(elementWithPlayer).toBeInTheDocument();
    });
});

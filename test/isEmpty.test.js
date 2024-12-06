import { expect } from 'chai';
import isEmpty from "../files_to_be_tested/isEmpty.js";


describe("isEmpty Function", () => {
    it("should return true for null", () => {
        expect(isEmpty(null)).to.be.true;
    });

    it("should return true for undefined", () => {
        expect(isEmpty(undefined)).to.be.true;
    });

    it("should return true for an empty string", () => {
        expect(isEmpty("")).to.be.true;
    });

    it("should return true for an empty array", () => {
        expect(isEmpty([])).to.be.true;
    });

    it("should return false for a non-empty array", () => {
        expect(isEmpty([1, 2, 3])).to.be.false;
    });

    it("should return true for an empty object", () => {
        expect(isEmpty({})).to.be.true;
    });

    it("should return false for a non-empty object", () => {
        expect(isEmpty({ a: 1 })).to.be.false;
    });

    it("should return true for an empty Map", () => {
        const map = new Map();
        expect(isEmpty(map)).to.be.true;
    });

    it("should return false for a non-empty Map", () => {
        const map = new Map();
        map.set("key", "value");
        expect(isEmpty(map)).to.be.false;
    });

    it("should return true for an empty Set", () => {
        const set = new Set();
        expect(isEmpty(set)).to.be.true;
    });

    it("should return false for a non-empty Set", () => {
        const set = new Set();
        set.add(1);
        expect(isEmpty(set)).to.be.false;
    });

    it("should return true for true or false (primitive booleans)", () => {
        expect(isEmpty(true)).to.be.true;
        expect(isEmpty(false)).to.be.true;
    });

    it("should return true for numbers", () => {
        expect(isEmpty(0)).to.be.true;
        expect(isEmpty(123)).to.be.true;
    });

    it("should return false for strings with content", () => {
        expect(isEmpty("abc")).to.be.false;
    });

    it("should handle prototypes correctly", () => {
        const obj = Object.create({});
        expect(isEmpty(obj)).to.be.true;

        obj.key = "value";
        expect(isEmpty(obj)).to.be.false;
    });
});
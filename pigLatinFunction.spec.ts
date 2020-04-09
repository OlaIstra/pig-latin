import convertStringToPigLatin from './pigLatinFunction'

describe("Pig Latin", function () {

  it("Words that start with a consonant have their first letter moved to the end of the word and the letters “ay” added to the end.", function () {
    expect(convertStringToPigLatin("Hello")).toEqual("Ellohay");
  });

  it("Words that start with a vowel have the letters “way” added to the end", function () {
    expect(convertStringToPigLatin('apple')).toEqual('appleway');
  });

  it("Words that end in “way” are not modified", function () {
    expect(convertStringToPigLatin('stairway')).toEqual('stairway');
  });

  it("Punctuation must remain in the same relative place from the end of the word", function () {
    expect(convertStringToPigLatin('stairway.')).toEqual('stairway.');
  });

  it("Punctuation must remain in the same relative place from the end of the word", function () {
    expect(convertStringToPigLatin("can't")).toEqual("antca'y");
  });

  it("Punctuation must remain in the same relative place from the end of the word", function () {
    expect(convertStringToPigLatin('end.')).toEqual('endway.');
  });

  it("Hyphens are treated as two words", function () {
    expect(convertStringToPigLatin('this-thing')).toEqual('histay-hingtay');
  });

  it("Capitalization must remain in the same place", function () {
    expect(convertStringToPigLatin('Beach')).toEqual('Eachbay');
  });

  it("Capitalization must remain in the same place", function () {
    expect(convertStringToPigLatin('McCloud')).toEqual('CcLoudmay');
  });

  it("Paragraf to pig latin", function () {
    expect(convertStringToPigLatin('McCloud op!en tiny-apple window. McCloud op!en tiny-apple window.')).toEqual('CcLoudmay openw!ay inytay-appleway indowway. CcLoudmay openw!ay inytay-appleway indowway.');
  });

});




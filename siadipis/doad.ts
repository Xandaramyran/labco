class ZipCode {
  private _zipCode: string;

  constructor(zipCode: string) {
    if (!this.isValidZipCode(zipCode)) {
      throw new Error('Invalid ZIP code format.');
    }
    this._zipCode = zipCode;
  }

  // Validates the ZIP code format (e.g., "12345-6789").
  private isValidZipCode(zipCode: string): boolean {
    const zipCodePattern = /^[0-9]{5}(?:-[0-9]{4})?$/;
    return zipCodePattern.test(zipCode);
  }

  // Returns the ZIP code.
  public get zipCode(): string {
    return this._zipCode;
  }

  // Sets a new ZIP code after validation.
  public set zipCode(newZipCode: string) {
    if (!this.isValidZipCode(newZipCode)) {
      throw new Error('Invalid ZIP code format.');
    }
    this._zipCode = newZipCode;
  }
}

// Usage
try {
  const myZipCode = new ZipCode("92998-3874");
  console.log(`The ZIP code is: ${myZipCode.zipCode}`);
} catch (error) {
  console.error(error);
}

Buffer = require("buffer").Buffer

// Import envrionment variables from env_variables
const {
    kms_resource_name,
    first_level_key
} = require("includes/env_variables.js");

// Do not change any variables below
const kms = kms_resource_name
const aead_base64_str = first_level_key
const binary_data = Buffer.from(aead_base64_str, 'base64');
const hexed_string = "\\x" + binary_data.toString('hex').match(/.{1,2}/g).join("\\x");

function deterministic_decrypt(column, kms_resource_name = kms, hex_string = hexed_string) {
    // Decrypt the column
    return `DETERMINISTIC_DECRYPT_STRING(
		KEYS.KEYSET_CHAIN(
			"${kms_resource_name}",
	    b"${hex_string}"
    ),
    ${column},
    ""
  )`;
}

module.exports = {
    deterministic_decrypt,
};

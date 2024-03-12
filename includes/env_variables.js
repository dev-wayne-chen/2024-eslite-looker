// All variables depending on environments should be declared here 

if (dataform.projectConfig.vars.env === "uat") {
    pii_tag = "projects/eslite-data-pipeline-uat/locations/asia-east1/taxonomies/8169876621446932817/policyTags/886166071477959379";
    confidential_tag = "projects/eslite-data-pipeline-uat/locations/asia-east1/taxonomies/8169876621446932817/policyTags/7588506806937514095"
    kms_resource_name = "gcp-kms://projects/eslite-data-pipeline-uat/locations/asia-east1/keyRings/pii/cryptoKeys/pii";
    first_level_key = "CiQAtO0OMig9zdJT4OEJqNIhEmjn1lGyCGOllzHN2IRIqaRrEBcStwEAxDnLxZsUFoN0HvV0/zvBDdbL388IJkoRt1nohOqAFRvPFBt1QJ5aPVPVbijW0ktUCiO4bWMlX3ppdfxdunMUXQk+rf1A5TYXp3mvrgNmprvX1uDgXNCvGSim/d3hAHC02AstQHhol0tTr6CA1GEgaO2GoSHfQHBU02YlLhyfs0/KSxdoVv0KidrWZwtvSPuyw3nPpAujpPeCO48dPYx7BSByesMQF5Mj9G0nMkzAImJ9rCRx918=";
    ec_project = "ec-uat";

} else {
    pii_tag = "projects/eslite-data-pipeline-prod/locations/asia-east1/taxonomies/1678801073598555306/policyTags/6244776309076812147";
    confidential_tag = "projects/eslite-data-pipeline-prod/locations/asia-east1/taxonomies/1678801073598555306/policyTags/1254951472279866933";
    kms_resource_name = "gcp-kms://projects/eslite-data-pipeline-prod/locations/asia-east1/keyRings/pii/cryptoKeys/pii";
    first_level_key = "CiQAO2FD0yPluDCdQIiQHla45ClDJ7k3/lb/q4YHiRJvPxgcHEMStwEAdBUH/xC83iXWOz72voV+MLXFoOR0n9v5+bhRYvIxjVpoqG0Ba4VWzyOD75K5mke6LLA9Kp/GiUoiU1D+wj3SuJTBJVu+SvdgQtFmqbpuMCRZRGeD3xNUnHU0tSelIGCVse7I5I8OPSzv9rpuQUmFBtURpqme8ZCmlOv6AsejXHjMm6L+xMRbTsF3ncH9qtbU4iK6cz3kdAgn+c8nLNLNJOPpAXnlSM/nmIipuLu5tIIiNhTuegQ=";
    ec_project = "ec-prod-412708";
}


module.exports = {
    kms_resource_name,
    first_level_key,
    pii_tag,
    confidential_tag,
    ec_project
};
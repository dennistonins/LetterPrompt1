// script.js
document.getElementById('letterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collecting form data
    var name = document.getElementById('name').value;
    var clients = document.getElementById('clients').value;
    var agency = document.getElementById('agency').value;
    var agents = document.getElementById('agents').value;
    var location = document.getElementById('location').value;
    var experience = document.getElementById('experience').value;
    var impact = document.getElementById('impact').value;
    var benefits = document.getElementById('benefits').value;
    var communityNeeds = document.getElementById('communityNeeds').value;
    var contactInfo = document.getElementById('contactInfo').value;

    // Generating the letter with user data appended
    var letter = `Task: Compose a professional letter addressed to senators and congressmen.

Objective: The letter should address the issue of CMS's proposed rule to eliminate administrative payments from insurance companies to Field Marketing Organizations (FMOs), which could significantly impact the support FMOs provide.

Content Guidelines:

Introduction: Include a brief introduction about the sender (a professional in the field affected by this rule) highlighting their experience, the scale of operation, and location.
Issue Highlight: Clearly state the proposed rule by CMS and its potential negative impact on FMOs.
Request for Action: Urge the local representatives to inform CMS about the crucial services provided by FMOs and to oppose the elimination of administrative payments to FMOs.
Detailing the Impact:
Explain how the absence of FMOs would affect the community and the clients.
List specific benefits provided by FMOs, like technology support and insurance assistance, and how these are vital for the sender's operations.
Conclusion: End with a formal request for the representatives' support and a thank you note.
Style: The letter should be formal and persuasive, clearly articulating the importance of the issue and the need for the representatives' intervention.

------------------
User Input:
Name: ${name}
Number of Clients: ${clients}
Representing Agency: ${agency}
Number of Agents in Agency: ${agents}
Location: ${location}
Years in Business: ${experience}
Specific Impact: ${impact}
Benefits from FMOs: ${benefits}
Community Needs: ${communityNeeds}
Contact Information: ${contactInfo}
------------------`;

    document.getElementById('outputLetter').value = letter;
});

document.getElementById('agency').addEventListener('change', function() {
    var agencySelection = document.getElementById('agency').value;
    var agencyDetails = document.getElementById('agencyDetails');
    if (agencySelection === 'yes') {
        agencyDetails.style.display = 'block';
    } else {
        agencyDetails.style.display = 'none';
    }
});

document.getElementById('copyButton').addEventListener('click', function() {
    var copyText = document.getElementById('outputLetter').value;

    navigator.clipboard.writeText(copyText).then(function() {
        console.log('Text successfully copied to clipboard');
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
});
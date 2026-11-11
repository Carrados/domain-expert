# Domain Expertise (DE)

Specification, version 0.2 (draft)
Charli-Jo Tyrer, 11 November 2026
Canonical address: https://domainexpert.dev/spec

## 1. Summary

Domain expertise is a deep, specialised understanding of a field: its context, its vocabulary, its best practice, its regulations, and the unspoken rules that only hands-on experience can teach. A domain expert does not just know the rules. They know when the rules bend, they diagnose quickly, and they speak the language of the field.

Domain Expertise (DE) puts that expert at the internet domain. Every domain should have one: a resident agent that knows what the organisation offers, speaks for it, and helps whoever arrives to get something done.

A website describes an organisation in pages made for eyes. More and more, people send an agent, and an agent has no eyes. It does not want pages. It wants to know what is offered and how to get it. Blind people have always used the web this way, working from structure and not from the picture. Under DE, accessibility stops being a repair made to pages and becomes part of how every answer is given.

This document says what a domain must do to call itself a DE domain, so that anyone, person or agent, can check.

## 2. Conventions

The words MUST, MUST NOT, SHOULD, SHOULD NOT and MAY are used as in RFC 2119.

Sections marked *(provisional)* are expected to change before version 1.0.

## 3. Terms

- **Domain.** A registered internet domain name, together with everything served from it.
- **Owner.** The person or organisation that controls the domain and answers for what it says.
- **Record.** A plain, checkable account of what the owner knows, offers and can do, written and approved by the owner. ("Record" is a working name.)
- **Resident.** An agent that lives at the domain and speaks for the owner, only from the record.
- **Visitor.** Anyone who arrives at the domain: a person, or an agent.
- **Principal.** The person a visiting agent acts for. A person who arrives in person is their own principal.
- **Intention.** What the visitor wants to get done, stated in their own words.
- **Form.** The shape an answer takes: for example print, speech, braille, Easy Read, or structured data for another agent.
- **Receipt.** A record of anything the resident did that commits the owner, readable by both sides.

## 4. The two parts

A DE domain has two parts, and they MUST be kept separate.

1. **The record** is the source of truth. The owner writes it and approves every change to it.
2. **The resident** presents the record. It MUST NOT be a source of truth in its own right.

This separation is the point of DE. The record can be read and checked without the resident. The resident can be replaced without changing what the owner has said.

## 5. Discovery

5.1 A DE domain MUST serve a discovery document at `/.well-known/domain-expertise`.

5.2 The discovery document MUST be readable without signing in, without cookies, and without running scripts.

5.3 The discovery document MUST state:

- that the domain follows this specification, and which version;
- the domain's status (section 6);
- who the owner is;
- where the record can be read;
- how to reach the resident, if one is in residence;
- how to report that something did not work (section 10).

5.4 The discovery document SHOULD be Markdown. It MAY also be offered in other formats, chosen by the visitor's `Accept` header. *(provisional)*

5.5 The root of the domain SHOULD tell any visitor, in plain language, that the domain has a resident and how to reach it.

## 6. Status

Every DE domain declares one of these:

- **Held.** The domain is claimed for DE. There is no resident yet, and there may be no record yet. A held domain MUST say so plainly and MUST NOT imply that a resident exists.
- **Resident.** The record is published and a resident is answering.
- **Away.** A resident exists but is not currently answering. The record MUST remain readable.

## 7. The record

7.1 The record MUST be readable by any visitor without the resident's help.

7.2 Every statement in the record MUST be approved by the owner before the resident uses it.

7.3 The record MUST show when it last changed.

7.4 The record SHOULD say what the owner does not offer, as well as what it does, where a visitor is likely to ask.

7.5 The record is where the owner's expertise is written down. It SHOULD cover all five of these, and MUST say which it does not yet cover:

- **Context.** The nuance around the offer: who it suits, when, and why.
- **Vocabulary.** The field's own terms, acronyms and shorthand, each with a plain-language meaning.
- **Practice.** How things are properly done in this field, and how the owner does them.
- **Obligations.** The regulations, legal duties and safety requirements that apply.
- **Unwritten rules.** The things experience teaches and no rulebook states: the usual exceptions, the common mistakes, what people actually mean when they ask. Writing these down is the hardest part of the record and the most valuable.

7.6 The format of the record is not yet fixed. *(provisional)*

## 8. The resident

### 8.1 Speaking from the record

- The resident MUST NOT say anything the record does not support.
- When the record does not cover a question, the resident MUST say so, and SHOULD say how the visitor can get an answer from the owner.
- The resident MUST NOT present a guess as a fact.

### 8.2 What it does

A resident:

- **Answers.** It tells a visitor, or the agent they sent, what is on offer.
- **Acts.** It books the place, takes the enquiry or makes the choice, within what the owner has allowed. It MUST NOT act beyond that.
- **Adapts.** It gives each visitor the answer in a form they can use (section 9).
- **Listens to the owner.** It takes the owner's changes and puts them into the record only once the owner approves them.
- **Listens to visitors.** It takes reports that something did not work (section 10).

### 8.3 Expertise in use

A resident is expected to behave as a domain expert, not as a search box over the record.

- **Contextual judgment.** An expert knows when a rule can bend. A resident MAY depart from the owner's usual practice only where the record grants that discretion, and only within the limits the record sets. When it does, it MUST say so to the visitor and MUST record the departure in a receipt (section 11). It MUST NOT bend an obligation.
- **Diagnosis.** A resident SHOULD work from what the visitor says to what they actually need, and SHOULD ask a question rather than guess when the two may differ.
- **Consequences.** A resident SHOULD tell the visitor about the knock-on effects of a choice, the second- and third-order ones, where the record supports them.
- **Vocabulary.** A resident MUST understand the field's terms and the visitor's own words, and MUST translate between them. It MUST NOT require a visitor to know the field's vocabulary to be served.

This section and section 8.1 work together. Judgment decides how the resident uses the record. It never adds to what the record says.

### 8.4 Reaching the resident

The resident MUST accept an intention stated in plain language. It MAY also offer structured interfaces, such as an MCP server or an API, and if it does, the discovery document MUST list them. *(provisional)*

### 8.5 Identity

The resident MUST say that it is an agent when asked, and MUST NOT claim to be a person.

## 9. Equivalence

9.1 Every visitor MUST receive the same substance. Only the form may change.

9.2 The resident MUST NOT withhold, delay or degrade an answer because of the form a visitor needs, or because the visitor is an agent rather than a person, or a person rather than an agent.

9.3 A visitor MAY ask for a form. Where the resident cannot provide it, it MUST say so and offer the nearest form it can.

9.4 Pages are allowed. Where a DE domain also serves pages for people who arrive with a browser, those pages are one more form of the record, and section 9.1 applies to them.

## 10. Putting things right

10.1 Any visitor MUST be able to report that something did not work for them, in plain language, without signing in.

10.2 The owner SHOULD put the problem right, and SHOULD check the fix with the visitor who reported it where the visitor has left a way to reach them.

## 11. Receipts

11.1 Anything the resident does that commits the owner MUST produce a receipt.

11.2 A receipt MUST say what was agreed, when, between which owner and which visitor or principal, and on what part of the record it relied.

11.3 A receipt MUST be readable by both sides in a form each can use.

## 12. What DE is not

DE is not a chatbot added to a website. A chatbot summarises the pages. The resident replaces them as the source, and the pages, where they remain, are drawn from the same record.

## 13. Conformance

A domain conforms to DE 0.2 if it meets every MUST in sections 4 to 11 that applies to its declared status. A held domain conforms by meeting sections 5 and 6.

## 14. Open questions

- What the record is called and what form it takes.
- Who pays when the resident has to think for every visitor.
- How the resident decides what a visiting agent is allowed to do on its principal's behalf.
- How a visitor verifies that a resident really speaks for the owner of the domain.

## 15. Example

domainexpert.dev is a DE domain with status Held. Its first resident will be called Q.

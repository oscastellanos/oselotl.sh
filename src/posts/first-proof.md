---
title: First Proof
date: "2026-03-06"
description: Learn how to customize colors, fonts, and more in your Duckquill-Svelte blog
tags:
  - mathematics
  - llms
  - llm-evals
---

I was recently introduced to the study of evaluating how well LLMs can generate mathematical proofs to solve advanced mathematical research problems. 

It is a fascinating topic because it seeks to determine whether AI can assist in the mathematical research process, and if so, how well. The challenge thus far in that determination is that most current math benchmarks are geared toward problems outside the realm of advanced mathematical research and can be automatically graded. Therefore, the results from those studies and benchmarks don’t represent the typical work of professional mathematicians.

The First Proof work is an experiment to raise the difficulty of the questions provided, the type of solution an LLM model is required to provide, and the mode in which a user uses the AI model. The problems provided are research-level questions in mathematics. The LLM is asked to provide a proof no longer than 5 pages for each problem. And the last major caveat is that the LLM is supposed to one-shot the answer, meaning that no human interaction is provided beyond the initial prompt that asks the model to solve the problem (and defines the problem).

How the questions were gathered is also worth noting. The researchers behind First Proof gathered ten questions from their respective areas of mathematical research and expertise. Each question had a private proof that the contributor had completed but never shared before. This ensures that each proof has not been posted online and, therefore, that none of the AI models could have seen the answer prior to the research.

[Link to First Proof paper](https://arxiv.org/pdf/2602.05192)

[1stproof.org](https://1stproof.org/)

[Link to community website](https://icarm.zulipchat.com/)

---

Why is this exciting to me? Well, how can we trust the output of LLMs for science and mathematical research if we don’t really understand their capacity to reason with complex subjects? Also, what is the limit of current model architectures in this regard? If we’re not able to articulate the deficiencies, what hope is there to improve them? 



As I learn more about how LLMs are trained and the efforts made post-training, I get the sense that, currently, each field has to do a lot of work to integrate its domain with AI. What this signals to me as a part-time researcher is that making tools for that integration has the most value-add. 



With all that in mind, the following are sketches of ideas for tooling that could help the current and next batch of First Proof problems. 



A website where users can upload their full transcript, and only approved users can annotate the answers

  1. New Problem Approval Workflow: Allow approved users to upload new problems for review and approval.
  2. Upload Transcript Workflow: This functionality could start pretty basic (User manually copies and pastes or shares a link), but if needed, we could have a custom page where a user can change models on the fly, and the transcript is automatically saved and sent to a review queue. This could support both verified users (professional mathematicians) and public users. 
  3. Proof Evaluation Workflow: A page where approved users can go to and pick a specific domain or type of problem they’re an expert at. Then, a proof from a submitted transcript, ready for review, would be shown (the model would be hidden), and the user could annotate it. 



This type of tooling enhances the existing workflow of this research. The point is to facilitate the evaluation done by human expert graders. But this could be the initial phase of the tooling. I think there are opportunities to add new features to the current workflow to answer questions outlined in the First Proof paper, such as: 

* “What is an appropriate prompting strategy?”
* “What format should an answer take and how should it be graded?”
* “Are there data contamination issues we have missed?” 

If there is interest, I can research which features to add that would enable tackling these types of questions.



Overall, the tooling outlined above aligns with the current spirit of the project. Additional research into how to scale the evaluation efforts through automated methods could be an interesting adjacent research agenda. 

* The paper [IMProofBench: Benchmarking AI on Research-Level Mathematical Proof Generation](https://arxiv.org/pdf/2509.26076) discusses several interesting evaluation choices. However, their research also evaluates the tools the AI models use and is not focused on the models' one-shot ability to generate proofs. 
* Leveraging LLMs for evaluating proofs could be worthwhile as well. The LLM-as-judge approach was explored in [The Open Proof Corpus: A Large-Scale Study of LLM-Generated Mathematical Proofs](https://arxiv.org/pdf/2506.21621) and they claim that “...LLMs exhibit strong capabilities in evaluating proofs: GEMINI-2.5- PRO achieves 88.1% accuracy in judging proof correctness—nearly matching human performance at 90.4%” (pg. 2). Further investigation would be required to see if there is a fit with First Proof’s approach. 

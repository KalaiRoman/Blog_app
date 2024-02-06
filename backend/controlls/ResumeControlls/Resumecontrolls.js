

// create resume

import Resume_Shema from "../../models/Resume_Shema.js"

export const createResume = async (req, res, next) => {
    const {
        userId,
        personDetails,
        Educations,
        Skills,
        Projects,
        Hobbies,
        Languages,
        WorkExperience
    } = req.body;
    try {
        const response = await new Resume_Shema({
            userId: req.userid,
            personDetails,
            Educations,
            Skills,
            Projects,
            Hobbies,
            Languages,
            WorkExperience,
            user: req.userid,
        })
        response.save();
        res.status(201).json({ message: "Resume Created", status: "true" })

    } catch (error) {
        res.status(404).json({ message: "false", message: "Create Error Resume" })
    }
}

// edit resume

export const editResume = async (req, res, next) => {
    const id = req.params.id;
    try {

        const update = await Resume_Shema.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ message: "Resume Updated", status: "true" })


    } catch (error) {
        res.status(404).json({ message: "false", message: "edit Error Resume" })
    }
}

// get resume

export const getAllResume = async (req, res, next) => {
    try {
        const allResumes = await Resume_Shema.find({ userId: req.userid }).sort({ createdAt: -1 });
        res.status(200).json({ message: "success", data: allResumes });

    } catch (error) {
        res.status(404).json({ message: "false", message: "getAllResume Error Resume" })
    }
}
// getSingle resume

export const getSingleResume = async (req, res, next) => {
    try {
        const allResumes = await Resume_Shema.findById({ _id: req.params.id });
        res.status(200).json({ message: "success", data: allResumes });
    } catch (error) {
        res.status(404).json({ message: "false", message: "getSingle Error Resume" })
    }
}

// delete resume

export const deleteResume = async (req, res, next) => {
    try {
        const allResumes = await Resume_Shema.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Resume Deleted" });
    } catch (error) {
        res.status(404).json({ message: "false", message: "delete Error Resume" })
    }
}
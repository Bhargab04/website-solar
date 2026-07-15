import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: () => <Outlet />,
});

export const categories = ["All", "Subsidies", "Savings", "Guides", "Solar Tech"] as const;

export interface Post {
  id: string;
  category: typeof categories[number];
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  seoTitle?: string;
}

export const posts: Post[] = [
  {
    id: "how-to-choose-best-solar-company-assam-buyers-guide",
    category: "Guides",
    title: "How to Choose the Best Solar Company in Assam | Complete Buyer’s Guide & Frequently Asked Questions",
    excerpt: "Planning to install rooftop solar in Assam? Learn how to choose the right solar company, avoid common mistakes, understand warranties, financing, maintenance, and make an informed decision for your home or business.",
    date: "July 13, 2026",
    readTime: "7 min read",
    author: "Solara Editorial Team",
    image: "https://res.cloudinary.com/dwjneqfb9/image/upload/v1783920848/WhatsApp_Image_2026-07-11_at_10.47.51_AM_1_fpral5.jpg",
    seoTitle: "Best Solar Company in Assam | Complete Solar Buyer’s Guide | Solara Energy Solutions",
    content: `
## Why Choosing the Right Solar EPC Company Matters

A solar EPC (Engineering, Procurement & Construction) company is responsible for the complete execution of your project—from consultation and design to installation, testing, and after-sales support. A reliable EPC partner can help ensure:

- Proper system sizing
- Professional engineering
- Safe installation practices
- Quality equipment
- Clear documentation
- Long-term service support
- Better system reliability
- Transparent communication

Rather than focusing only on the lowest quotation, consider the overall value and long-term performance of the installation.

## Questions to Ask Before Buying a Solar System

Before finalizing your project, consider asking your installer the following questions:

### 1. Is my roof suitable for solar?

A site survey should evaluate roof orientation, structural condition, shading, and available space.

### 2. Which system size is right for my electricity consumption?

Your recommendation should be based on actual energy usage and future requirements, not simply the largest system that fits your roof.

### 3. Which solar panels and inverter are being offered?

Request details about the equipment proposed for your project, including manufacturer specifications and warranty information.

### 4. What warranties are included?

Understand the warranties covering:

- Solar panels
- Inverter
- Mounting structure
- Installation workmanship

### 5. Will I receive post-installation support?

Ask about:

- Service response times
- Maintenance options
- Spare parts availability
- Performance monitoring
- Technical assistance

### 6. Are financing options available?

Some financial institutions may offer loans for eligible solar projects. Discuss available options and repayment terms directly with the lender.

### 7. What documentation will I receive?

A professionally executed project should include relevant documentation such as equipment manuals, warranty information, commissioning records, and guidance for system operation.

## Common Mistakes to Avoid

### Choosing Only on Price

The least expensive quotation may not always provide the best long-term value. Equipment quality, installation standards, warranties, and after-sales support should also be considered.

### Ignoring Roof Shading

Even small shaded areas can affect energy generation. A detailed shade analysis helps optimize system performance.

### Selecting an Incorrect System Size

An oversized or undersized system may not align with your energy needs. A customized assessment is the best approach.

### Overlooking Maintenance

Although rooftop solar requires relatively little maintenance, periodic inspections and cleaning help sustain performance over time.

### Not Understanding the Warranty

Read the warranty terms carefully so you understand what is covered by the manufacturer and what is covered by the installer.

## Solar Applications Across Assam

Solar energy is being adopted across a wide range of sectors throughout the state.

### Residential

- Independent homes
- Apartments
- Villas
- Residential societies

### Commercial

- Retail stores
- Hotels
- Restaurants
- Office buildings
- Shopping complexes
- Educational institutions
- Healthcare facilities

### Industrial

- Manufacturing units
- Rice mills
- Warehouses
- Tea processing units
- Food processing plants
- Cold storage facilities
- Engineering workshops

### Agriculture

Solar technology can also support agricultural operations such as water pumping and other energy-intensive activities, depending on project requirements and applicable programs.

## Serving Customers Across Assam

SOLARA ENERGY SOLUTIONS proudly serves residential, commercial, institutional, and industrial customers across Assam. Our service network covers major cities and districts including:

- Guwahati
- Jorhat
- Dibrugarh
- Tinsukia
- Golaghat
- Sivasagar
- Nagaon
- Morigaon
- Tezpur
- Sonitpur
- Silchar
- Cachar
- Karimganj
- Hailakandi
- Barpeta
- Bongaigaon
- Kokrajhar
- Dhubri
- Goalpara
- Nalbari
- Mangaldoi
- Darrang
- Lakhimpur
- North Lakhimpur
- Dhemaji
- Biswanath
- Charaideo
- Majuli
- Udalguri
- Baksa
- Chirang
- Kamrup
- Kamrup Metropolitan
- Karbi Anglong
- West Karbi Anglong
- Dima Hasao
- South Salmara-Mankachar

If your location is not listed, you are still welcome to contact us. We evaluate projects throughout Assam based on feasibility and service availability.

## Frequently Asked Questions

### Which is the best solar company in Assam?

The right choice depends on factors such as engineering expertise, installation quality, customer support, equipment selection, warranties, and overall value. It is advisable to compare multiple providers and review their experience before making a decision.

### Is rooftop solar worth installing in Assam?

For many homes and businesses with suitable roof space and electricity consumption, rooftop solar can be a practical long-term investment. The benefits depend on system design, usage patterns, electricity tariffs, and applicable policies.

### Which solar panel brand is best?

Several manufacturers produce high-quality modules. Common brands available in India include:

- Adani Solar
- Tata Power Solar
- Waaree
- Vikram Solar
- RenewSys
- Saatvik
- LONGi
- JinkoSolar
- JA Solar
- Trina Solar
- Canadian Solar
- Astronergy

The most suitable choice depends on project requirements, budget, efficiency, warranty, and availability.

### Which inverter brand should I choose?

Popular inverter manufacturers include:

- Sungrow
- Growatt
- Solis
- Huawei
- GoodWe
- Delta
- SMA
- Fronius

Selection should be based on compatibility, monitoring features, warranty, service support, and system size.

### Will my solar system work during cloudy weather?

Yes. Modern photovoltaic panels continue generating electricity under diffused sunlight, although output is generally lower than during bright sunshine.

### How long does a rooftop solar system last?

High-quality systems are designed for long operational lifespans. Refer to the manufacturer’s warranty and maintenance recommendations for detailed expectations.

### Can businesses also install rooftop solar?

Yes. Rooftop solar is widely used by offices, factories, warehouses, hotels, hospitals, schools, shopping centres, and other commercial or industrial establishments.

## Why Choose SOLARA ENERGY SOLUTIONS?

At **SOLARA ENERGY SOLUTIONS**, we strive to provide reliable, customer-focused rooftop solar solutions tailored to the unique energy needs of homes, businesses, and industries across Assam.

Our services include:

- Residential rooftop solar systems
- Commercial rooftop solar systems
- Industrial solar EPC projects
- Engineering and design
- Free site assessment
- Professional installation
- Assistance with applicable rooftop solar processes
- Preventive maintenance
- After-sales support

We believe every customer deserves a system that is engineered for safety, efficiency, and long-term performance.
`
  },
  {
    id: "3kw-5kw-10kw-solar-system-assam-savings-roi-maintenance-guide",
    category: "Savings",
    title: "Solar System Sizes, Electricity Generation, ROI, Maintenance & Long-Term Savings",
    excerpt: "Learn how much electricity a rooftop solar system can generate in Assam, compare 3kW, 5kW and 10kW systems, understand ROI, maintenance, warranties and long-term savings.",
    date: "July 12, 2026",
    readTime: "6 min read",
    author: "Solara Editorial Team",
    image: "https://res.cloudinary.com/dwjneqfb9/image/upload/v1783805052/Solar_System_Sizes_Electricity_Generation_ROI_Maintenance_Long-Term_Savings_srfgzz.jpg",
    seoTitle: "3kW, 5kW & 10kW Solar System in Assam | Savings, ROI & Maintenance Guide",
    content: `
## Choosing the Right Solar System Size

One of the most common questions homeowners and business owners ask is:

**“What size solar system should I install?”**

There is no single answer that fits everyone. The ideal system size depends on several factors, including your monthly electricity consumption, available rooftop space, future power needs, budget, and local regulations.

At **SOLARA ENERGY SOLUTIONS**, we begin every project with a detailed assessment of your energy usage and site conditions before recommending a system. Installing an oversized or undersized system may not provide the best value, so a customized design is always preferable.

## Common Solar System Sizes in Assam

### 2kW Solar System

A 2kW rooftop solar system is generally suitable for:

- Small homes
- Apartments
- Low electricity consumption households
- Small offices

Typical applications include:

- Fans
- LED lighting
- Television
- Refrigerator
- Laptop and mobile charging
- Moderate daytime appliance usage

### 3kW Solar System

The 3kW Solar System is one of the most popular choices among homeowners in Assam. It is commonly selected by families looking to reduce electricity bills while taking advantage of rooftop solar.

Suitable for:

- Independent houses
- Villas
- Duplex homes
- Small businesses
- Clinics
- Retail shops

A properly designed 3kW system can meet a significant portion of the daytime electricity needs of many households, depending on usage patterns.

### 5kW Solar System

The 5kW Solar System is ideal for:

- Larger homes
- Commercial establishments
- Schools
- Restaurants
- Offices
- Small hotels
- Diagnostic centres

It provides higher generation capacity and is often preferred by consumers with greater electricity demand.

### 6kW to 10kW Solar Systems

These systems are suitable for:

- Large residential buildings
- Apartments
- Medium-sized commercial buildings
- Educational institutions
- Healthcare facilities
- Warehouses

They are designed for users with higher daily electricity consumption and sufficient rooftop area.

### Commercial & Industrial Solar Plants

Businesses with substantial power requirements often install larger systems such as:

- 20kW
- 30kW
- 50kW
- 75kW
- 100kW
- 250kW
- 500kW
- 1MW and above

Such installations are commonly used by:

- Manufacturing industries
- Rice mills
- Tea factories
- Cold storage units
- Warehouses
- Hotels
- Shopping complexes
- Educational campuses
- Hospitals

## How Much Electricity Does a Solar System Generate?

Electricity generation depends on several variables, including:

- Daily sunshine
- Weather conditions
- Roof orientation
- Tilt angle
- Shading
- Panel efficiency
- Inverter efficiency
- System maintenance
- Seasonal variations

Because these factors vary from project to project, actual generation will differ. A site-specific assessment provides the most accurate estimate.

## Factors That Affect Solar Performance in Assam

Assam has unique climatic conditions that influence solar generation throughout the year.

### Sunshine Availability

Although Assam experiences a prolonged monsoon season, the state also enjoys many months of strong sunlight. Modern high-efficiency solar panels continue to produce electricity under diffused sunlight, though output is generally lower on heavily overcast days.

### Temperature

Contrary to popular belief, excessively high temperatures do not necessarily increase solar panel performance. Modern panels are designed to operate efficiently across a range of temperatures, and proper ventilation beneath the modules helps improve efficiency.

### Rainfall

Rainfall can naturally wash away dust and debris from the panel surface, but periodic cleaning is still recommended to maintain optimal performance.

### Shading

Trees, nearby buildings, water tanks, chimneys, and other obstructions can reduce energy production. A professional shade analysis is therefore an important part of system design.

## Return on Investment (ROI)

One of the strongest reasons for investing in rooftop solar is its potential to provide long-term savings on electricity costs. While the exact return on investment varies depending on electricity tariffs, system size, consumption patterns, financing method, and applicable incentives, a well-designed rooftop solar system can continue generating electricity for decades with relatively low operating costs. Evaluating ROI should involve consideration of the system’s entire lifecycle rather than only the initial installation cost.

### What Influences Your Savings?

Several factors affect the financial benefits of a solar installation:

- Monthly electricity consumption
- Local electricity tariff
- System capacity
- Percentage of self-consumed solar energy
- Net metering arrangements (where applicable)
- Maintenance practices
- Equipment quality
- Financing terms

A customized financial analysis can help estimate expected savings for a specific property.

## Solar Maintenance – Is It Difficult?

A common misconception is that solar systems require extensive maintenance. In reality, rooftop solar systems are designed for long-term operation with relatively modest maintenance requirements.

Routine care includes:

- Cleaning solar panels
- Visual inspections
- Monitoring system performance
- Checking electrical connections
- Ensuring ventilation around the inverter
- Following the manufacturer’s maintenance recommendations helps maximize system performance.

### How Often Should Solar Panels Be Cleaned?

Cleaning frequency depends on local conditions such as dust, bird droppings, pollen, leaves, and nearby construction activities. Many systems benefit from periodic cleaning to remove accumulated dirt that may reduce energy production.

When cleaning panels:

- Follow the manufacturer’s guidance.
- Avoid abrasive materials.
- Use safe access methods.
- If unsure, seek professional assistance.

### Annual Maintenance Contract (AMC)

Some customers choose to enroll in an Annual Maintenance Contract (AMC) for added peace of mind. An AMC may include services such as:

- Scheduled inspections
- Performance checks
- Preventive maintenance
- Electrical testing
- Cleaning support
- Fault diagnosis
- Technical assistance

The scope of an AMC varies by provider, so customers should review the terms before enrolling.

## Warranties – What Should You Look For?

Before purchasing a solar system, understand the different types of warranties that may apply.

### Product Warranty

Covers manufacturing defects in the equipment for the period specified by the manufacturer.

### Performance Warranty

Solar panel manufacturers often provide a long-term performance warranty, indicating that the panels are expected to retain a specified level of output over time. The exact terms differ between manufacturers and should be reviewed carefully.

### Installation Warranty

Some EPC companies provide workmanship warranties covering aspects of the installation itself. Customers should ask for written warranty details before project completion.

## Common Myths About Solar

### Myth 1: Solar Doesn’t Work in Assam

This is incorrect. Modern photovoltaic technology is designed to generate electricity under both direct and diffused sunlight. Although output varies with weather conditions, rooftop solar is successfully used across Assam.

### Myth 2: Solar Needs Constant Repairs

A professionally installed system using quality components generally requires only routine maintenance and periodic inspections.

### Myth 3: Solar Panels Stop Working During the Monsoon

Solar generation decreases during periods of reduced sunlight, but panels continue to produce electricity whenever light is available.

### Myth 4: Solar Is Only for Wealthy Homeowners

Rooftop solar is available in a variety of system sizes, and financing options may be available through participating financial institutions, making it accessible to a broader range of consumers.

### Myth 5: Bigger Systems Are Always Better

Not necessarily. The ideal system size depends on your electricity usage, roof area, and project goals. A properly sized system is usually more cost-effective than simply installing the largest system possible.

## Tips to Maximize Solar Performance

To help your system perform efficiently over its lifetime:

- Keep panels reasonably clean.
- Monitor energy generation regularly.
- Avoid adding new shade sources near the array.
- Schedule periodic inspections.
- Use quality equipment from reputable manufacturers.
- Choose an experienced EPC company.
- Address any faults promptly.
- Follow manufacturer maintenance recommendations.

## Why Quality Installation Matters

Even the best solar panels and inverters cannot perform optimally if they are installed incorrectly. Professional installation helps ensure:

- Correct panel orientation
- Appropriate tilt angle
- Secure mounting
- Proper cable management
- Effective earthing
- Compliance with safety practices
- Reliable long-term performance

This is why selecting an experienced EPC partner is just as important as choosing quality equipment.

## Why SOLARA ENERGY SOLUTIONS?

At **SOLARA ENERGY SOLUTIONS**, we are committed to delivering customized rooftop solar solutions for homes, businesses, industries, institutions, and agricultural enterprises across Assam.

Our services include:

- Residential rooftop solar
- Commercial rooftop solar
- Industrial solar EPC
- Site survey and feasibility assessment
- Engineering and system design
- Professional installation
- Assistance with utility-related procedures
- After-sales support
- Preventive maintenance

Whether your property is located in Guwahati, Jorhat, Dibrugarh, Tinsukia, Nagaon, Tezpur, Silchar, Golaghat, Sivasagar, Barpeta, Kokrajhar, Lakhimpur, Karimganj, Bongaigaon, Dhemaji, Nalbari, Mangaldoi, Dhubri, Majuli, Morigaon, Sonitpur, Charaideo, Darrang, Hailakandi, Goalpara, Karbi Anglong, Dima Hasao, or elsewhere in Assam, our team can assess your requirements and recommend a solution tailored to your needs.

## Frequently Asked Questions

### How long do solar panels last?

Modern solar panels are designed for long operational lifespans. Refer to the manufacturer’s warranty and performance specifications for details.

### Will my electricity bill become zero?

The impact on your bill depends on your electricity consumption, system size, weather conditions, and applicable utility policies.

### Does rooftop solar increase property value?

Energy-efficient improvements such as rooftop solar may enhance the attractiveness of a property, though market value depends on many factors.

### Should I choose the cheapest solar system?

When comparing quotations, consider equipment quality, engineering, warranties, installation standards, and after-sales support—not just the initial price.
`
  },
  {
    id: "solar-installation-process-assam-apdcl-net-metering-pm-surya-ghar",
    category: "Guides",
    title: "Solar Installation Process in Assam | APDCL Net Metering & PM Surya Ghar Guide",
    excerpt: "Understand the complete rooftop solar installation process in Assam—from site survey and system design to APDCL net metering, commissioning, and PM Surya Ghar Muft Bijli Yojana.",
    date: "July 12, 2026",
    readTime: "5 min read",
    author: "Solara Editorial Team",
    image: "https://res.cloudinary.com/dwjneqfb9/image/upload/v1783801870/Step-by-Step_Solar_Installation_Process_APDCL_Net_Metering_PM_Surya_Ghar_Muft_Bijli_Yojana_bdayfa.jpg",
    seoTitle: "Solar Installation Process in Assam | APDCL Net Metering & PM Surya Ghar Guide",
    content: `
## How a Rooftop Solar Project Is Installed in Assam
Installing a rooftop solar system is much more than mounting panels on a roof. A professionally executed project involves planning, engineering, approvals, quality installation, testing, and ongoing support. At SOLARA ENERGY SOLUTIONS, we follow a structured EPC (Engineering, Procurement & Construction) process to ensure every system is designed for safety, efficiency, and long-term performance. Whether you’re installing a 3kW solar system for your home, a 10kW commercial system, or a large industrial solar plant, the process remains systematic and transparent.

**Step 1 – Initial Consultation**

Every project begins with understanding the customer’s requirements. Our team discusses:

- Current monthly electricity consumption
- Type of property (residential, commercial, industrial)
- Future electricity requirements
- Available rooftop area
- Budget expectations
- Backup power requirements
- Eligibility for government subsidy (where applicable)

To provide the most suitable recommendation, customers are generally asked to share recent electricity bills and basic property details.

**Step 2 – Free Site Survey**

A professional site survey is one of the most important stages of a solar project. During the survey, engineers evaluate:

- Roof dimensions
- Roof orientation
- Structural condition
- Shadow analysis
- Nearby trees and buildings
- Cable routing
- Earthing requirements
- Safety considerations
- Existing electrical infrastructure

This assessment helps determine the optimum system capacity and layout for maximum energy generation.

**Step 3 – System Design & Proposal**

Based on the survey findings, a customized solar proposal is prepared. The proposal typically includes:

- Recommended system size
- Estimated annual energy generation
- Preliminary equipment selection
- Project layout
- Estimated savings
- Project scope
- Installation methodology
- Warranty information
- Commercial quotation

Rather than recommending the largest possible system, the goal is to design one that aligns with the customer’s electricity consumption and available roof space.

**Step 4 – Choosing the Right Equipment**

Selecting quality equipment is essential for long-term reliability. A typical rooftop solar system includes:

**Solar Panels**

Depending on project requirements, customers may choose from reputed manufacturers such as:

- Adani Solar
- Tata Power Solar
- Waaree
- Vikram Solar
- RenewSys
- Saatvik
- LONGi
- JinkoSolar
- JA Solar
- Trina Solar
- Canadian Solar
- Astronergy

**Solar Inverters**

Popular inverter options include:

- Sungrow
- Growatt
- Solis
- GoodWe
- Huawei
- Delta
- SMA
- Fronius

The final selection depends on project size, performance expectations, budget, warranty, and service support.

**Step 5 – Documentation & Project Planning**

Before installation begins, the required documentation is completed. Depending on the project, this may include:

- Customer identity documents
- Property details
- Electricity consumer information
- Utility-related forms
- Technical documentation
- Engineering drawings

For customers eligible under applicable government programs, additional documentation may be required as per current guidelines.

**Step 6 – Professional Installation**

Once planning is complete, the installation team begins the physical execution of the project. The installation process generally includes:

**Mounting Structure Installation**

The mounting structure forms the foundation of the rooftop solar system. A properly engineered structure helps ensure:

- Panel stability
- Appropriate tilt angle
- Resistance to environmental conditions
- Long-term durability

The design is selected based on the roof type, structural characteristics, and project requirements.

**Solar Panel Installation**

Solar modules are carefully mounted on the structure using approved installation practices. Proper spacing is maintained to support ventilation and facilitate maintenance access where required.

**DC Cabling**

High-quality DC cables connect the solar panels to the inverter. Cable routing is planned to minimize power loss while ensuring safety and protection against environmental exposure.

**Inverter Installation**

The inverter is installed in a suitable location that provides:

- Adequate ventilation
- Accessibility for maintenance
- Protection from direct weather exposure
- Safe electrical connections

**AC Distribution & Protection**

The generated electricity passes through protective equipment before being integrated with the building’s electrical system. Protection devices help safeguard both the solar installation and the consumer’s electrical infrastructure.

**Earthing & Lightning Protection**

Safety is a critical aspect of every rooftop solar installation. Proper earthing systems and lightning protection measures are incorporated in accordance with applicable standards and site requirements to enhance system safety and reliability.

**Quality Checks During Installation**

Professional EPC companies perform multiple inspections throughout the installation process. These checks typically include:

- Mechanical inspection
- Electrical testing
- Cable continuity verification
- Polarity testing
- Insulation resistance checks
- Torque verification
- Equipment configuration
- Safety inspections

Attention to detail during installation can significantly influence long-term system performance.

## Understanding APDCL Net Metering
One of the most common questions customers ask is:

**What is Net Metering?**

Net metering is a mechanism that allows eligible rooftop solar consumers to export excess electricity generated by their solar system to the electricity grid and receive credit in accordance with the prevailing regulations and utility policies.

During sunny hours, if your solar system produces more electricity than your building consumes, the surplus energy can be supplied to the grid. When your consumption exceeds solar generation such as during the evening you draw electricity from the grid.

The net meter records both import and export of electricity. Net metering policies are governed by the relevant electricity distribution utility and applicable regulations, so customers should always refer to the latest official guidelines.

**APDCL Approval Process**

For eligible on-grid rooftop solar installations, utility approvals are an important part of the overall project. While procedures may evolve over time, the process generally includes:

- Project planning
- Submission of required documentation
- Technical review
- Installation
- Utility inspection (where applicable)
- Meter-related procedures
- System commissioning

An experienced EPC partner can assist customers in understanding and completing these formalities.

## PM Surya Ghar Muft Bijli Yojana
The PM Surya Ghar Muft Bijli Yojana is a Government of India initiative aimed at promoting residential rooftop solar installations. The scheme is designed to encourage eligible households to adopt clean energy while reducing long-term electricity expenses. Depending on the prevailing scheme guidelines and eligibility criteria, benefits may include financial assistance for qualifying residential rooftop solar systems. As government policies can change, applicants should always verify the latest eligibility conditions, documentation requirements, and subsidy details through the official portal.

**How SOLARA ENERGY SOLUTIONS Assists Customers**

Our team supports customers throughout the project lifecycle, including:

- Initial consultation
- Site survey
- System sizing
- Technical design
- Equipment selection
- Installation
- Guidance on documentation
- Assistance with utility-related procedures
- Testing and commissioning
- After-sales support

Our objective is to make the rooftop solar journey as smooth and transparent as possible.

**Project Testing & Commissioning**

Before a solar project is handed over, comprehensive testing is performed. This includes verification of:

- Solar panel performance
- Inverter operation
- Electrical safety
- Protection systems
- Monitoring functionality
- Grid synchronization (where applicable)

After successful testing and commissioning, the customer receives guidance on operating and monitoring the system.

**Digital Monitoring**

Many modern solar inverters provide online monitoring through dedicated mobile applications or web portals. Customers can typically view:

- Daily generation
- Monthly generation
- Annual generation
- System efficiency
- Historical performance
- Fault notifications (where supported)

Monitoring helps users understand how their solar system is performing and identify potential issues early.

**Estimated Installation Timeline**

The duration of a rooftop solar project depends on several factors, including system size, site conditions, equipment availability, documentation, and utility processes. Smaller residential projects may be completed relatively quickly, while larger commercial or industrial installations often require more planning and execution time. Customers should discuss expected timelines with their EPC provider based on the specifics of their project.

**Why Work With an Experienced Solar EPC Company?**

A rooftop solar system is expected to operate for decades. Choosing a qualified EPC partner can make a significant difference in long-term performance. An experienced installer offers:

- Professional engineering
- Quality workmanship
- Proper safety practices
- Reliable equipment selection
- Technical support
- Transparent communication
- Long-term service assistance

These factors contribute to a safer, more efficient, and dependable solar investment.

## Frequently Asked Questions

### Can I install solar on any roof?

Many roof types are suitable for solar, but a site survey is required to assess structural suitability, shading, and available space.

### Do I need batteries for an on-grid system?

No. Standard on-grid systems typically operate without battery storage.

### Will solar panels generate electricity on cloudy days?

Yes. Generation is usually lower than on bright sunny days, but modern solar panels continue to produce electricity under diffused sunlight.

### Is professional installation important?

Yes. Proper engineering, installation, and testing are essential for system safety, performance, and longevity.


`
  },
  {
    id: "ongrid-hybrid-offgrid-solar-systems-assam",
    category: "Guides",
    title: "On-Grid, Hybrid & Off-Grid Solar Systems in Assam | Solar Panel Guide",
    excerpt: "Learn the difference between on-grid, hybrid and off-grid solar systems. Compare TOPCon, Mono PERC, bifacial panels, leading inverter brands and choose the best solar solution for Assam.",
    date: "July 12, 2026",
    readTime: "4 min read",
    author: "Solara Editorial Team",
    image: "https://res.cloudinary.com/dwjneqfb9/image/upload/v1783799928/WhatsApp_Image_2026-07-11_at_10.36.20_AM_lcefej.jpg",
    seoTitle: "On-Grid, Hybrid & Off-Grid Solar Systems in Assam | Solar Panel Guide",
    content: `
## Understanding How a Solar Rooftop System Works
Many people believe that a solar system simply consists of a few panels placed on the roof. In reality, a modern rooftop solar system is a carefully engineered power generation system where every component plays an important role. When installed correctly by an experienced Solar EPC company like SOLARA ENERGY SOLUTIONS, your rooftop can become a clean power plant that generates electricity for more than 25 years.

A complete rooftop solar system generally consists of:

- Solar Panels
- Solar Inverter
- Module Mounting Structure
- DC & AC Cables
- Protection Devices
- Earthing System
- Lightning Protection
- Generation Meter
- Net Meter (for on-grid systems)
- Monitoring System

Each component contributes to the safety, efficiency and long-term performance of the installation.

## How Do Solar Panels Generate Electricity?
Solar panels contain photovoltaic (PV) cells that convert sunlight into Direct Current (DC) electricity. The generated DC power then flows to the solar inverter, which converts it into Alternating Current (AC) electricity—the type used by household appliances, offices and industrial equipment.

During daylight hours, your home or business uses the electricity generated by the solar system first. If your system produces more electricity than you consume and you have an approved Net Metering connection, the excess power is exported to the electricity grid.

When solar production is lower, such as at night or during periods of low sunlight, electricity is imported from the grid. This two-way flow of electricity helps maximize the value of your rooftop solar system.

## Main Types of Solar Systems
Choosing the right type of solar system depends on your electricity consumption, budget, backup requirements and availability of a grid connection.

**1. On-Grid Solar System**

The On-Grid Solar System is the most popular choice for homes, businesses and institutions in Assam.

**Best suited for:**

- Residential houses
- Apartments
- Shops
- Offices
- Schools
- Colleges
- Hospitals
- Hotels
- Commercial buildings
- Factories with reliable grid supply

**Advantages:**

- Lower installation cost
- No batteries required
- Eligible for applicable rooftop solar subsidy schemes where permitted
- Works with Net Metering
- Low maintenance
- Faster Return on Investment (ROI)

If your objective is to reduce electricity bills while remaining connected to the grid, an on-grid system is generally the most economical option.

**2. Hybrid Solar System**

A Hybrid Solar System combines rooftop solar with battery storage. During the day, the system powers your building while also charging the batteries. During power cuts, the stored energy can supply selected loads.

**Suitable for:**

- Homes experiencing frequent power outages
- Hospitals
- Clinics
- Offices
- Small industries
- Critical infrastructure

**Advantages:**

- Battery backup
- Reduced dependence on the electricity grid
- Better energy management
- Increased self-consumption of solar power

Hybrid systems typically involve higher initial investment due to battery costs but offer greater energy resilience.

**3. Off-Grid Solar System**

An Off-Grid Solar System operates independently of the electricity grid. All electricity generated is either consumed immediately or stored in batteries for later use. These systems are commonly installed in locations where grid connectivity is unavailable or unreliable.

**Common applications:**

- Remote villages
- Farmhouses
- Forest camps
- Rural schools
- Water pumping systems
- Border areas
- Isolated telecom sites

Since battery storage is essential, off-grid systems generally have higher installation costs and require careful system design.

## Which Solar System Is Best for Assam?
For most urban and semi-urban consumers with access to the electricity network, On-Grid Solar Systems are typically the preferred choice due to their cost-effectiveness and compatibility with net metering.

Hybrid systems are suitable for users who require backup power during outages, while off-grid systems are best reserved for locations without dependable grid access.

The ideal solution depends on factors such as electricity usage patterns, available roof space, budget, and local distribution infrastructure.

## Understanding Modern Solar Panel Technologies
Solar technology has evolved significantly over the last decade. Today’s high-efficiency panels generate more electricity while requiring less roof space than earlier generations. The major technologies include:

**1. N-Type TOPCon Solar Panels**

TOPCon (Tunnel Oxide Passivated Contact) is among the latest commercially available photovoltaic technologies.

**Benefits:**

- Higher efficiency
- Better performance in low-light conditions
- Lower degradation over time
- Improved temperature performance
- Longer useful life

Because Assam experiences cloudy weather during parts of the year, TOPCon technology is often considered an attractive option for maximizing energy generation.

**2. Mono PERC Solar Panels**

Mono PERC remains one of the most widely installed technologies worldwide. Advantages include:

- High efficiency
- Good reliability
- Competitive pricing
- Excellent long-term performance

Mono PERC continues to be a practical solution for many residential and commercial rooftop installations.

**3. Bifacial Solar Panels**

Bifacial modules are designed to generate electricity from both the front and rear surfaces. When installed under suitable conditions—such as elevated mounting structures or reflective surfaces—they can increase overall energy yield compared with conventional modules. These panels are commonly considered for commercial and industrial projects.

## Major Solar Panel Brands Available in India
Different projects may call for different panel manufacturers depending on performance, warranty, availability, and customer preferences.

Some well-known brands include:

- Adani Solar
- Tata Power Solar
- Waaree Energies
- Vikram Solar
- RenewSys
- Saatvik Solar
- LONGi Solar
- JinkoSolar
- JA Solar
- Trina Solar
- Canadian Solar
- Astronergy
- First Solar (selected applications)

Rather than focusing only on brand names, it is important to evaluate panel specifications, efficiency, certifications, warranty terms, and compatibility with the overall system design.

## Understanding Solar Inverters
The solar inverter is often described as the “brain” of the solar power system. Its primary function is to convert DC electricity produced by the solar panels into AC electricity that can be used by electrical appliances.

Modern inverters also provide:

- Generation monitoring
- Safety protection
- Grid synchronization
- Fault detection
- Remote performance monitoring through mobile apps

Choosing a reliable inverter is essential for long-term system performance.

## Types of Solar Inverters

**1. String Inverters**

String inverters are the most commonly used solution for residential and commercial rooftop projects.

**Advantages include:**

- Cost-effective
- Reliable
- Easy maintenance
- High efficiency
- Widely supported across India

**2. Hybrid Inverters**

Hybrid inverters manage electricity from solar panels, batteries, and the grid simultaneously. These are commonly used where energy storage and backup power are required.

**3. Central Inverters**

Central inverters are generally deployed in very large commercial or utility-scale solar projects due to their high power capacities.

## Popular Solar Inverter Brands
Several manufacturers offer high-quality solar inverters suitable for Indian conditions. Popular brands include:

- Sungrow
- Growatt
- Solis
- Huawei
- GoodWe
- Delta
- SMA
- Fronius
- Hitachi Energy (industrial applications)

The most suitable inverter depends on system size, monitoring requirements, warranty, service availability, and compatibility with the chosen solar modules.

## How Much Roof Space Is Required?
Roof area requirements vary depending on panel efficiency and system capacity. Approximate estimates:

![Roof Space Requirements Table](https://res.cloudinary.com/dwjneqfb9/image/upload/v1783801094/table_lrvuox.png)

A professional site survey is recommended to determine the actual usable roof area after considering shading, orientation, and structural suitability.

## Common Questions Before Installing Solar
Before investing in a rooftop solar system, many customers ask:

- Which solar panel technology is best for Assam?
- Should I choose TOPCon or Mono PERC?
- Is bifacial technology worth the additional cost?
- Which inverter brand is most suitable?
- How much roof space do I need?
- Can solar panels generate electricity during cloudy weather?
- Will my solar system work during a power cut?
- Which type of solar system provides the best value?

The answers depend on your energy requirements, property type, electricity consumption, and future plans. A customized assessment is the best way to identify the right configuration.

## Why Professional System Design Matters
Every rooftop is different. Factors such as roof orientation, shading from nearby buildings or trees, structural strength, local weather conditions, and electricity consumption patterns all influence the design of an efficient solar power system.

At SOLARA ENERGY SOLUTIONS, our engineers conduct a detailed site assessment before recommending a system. This helps ensure that the selected components work together efficiently and are appropriately sized for your needs, whether the project is residential, commercial, or industrial.
`
  },
  {
    id: "solar-energy-future-assam",
    category: "Guides",
    title: "Why Solar Energy is the Future of Assam | Complete Guide by SOLARA ENERGY SOLUTIONS",
    excerpt: "Looking for the best solar company in Assam? Learn everything about rooftop solar systems, PM Surya Ghar Muft Bijli Yojana, solar panels, net metering, and how to save on electricity bills with SOLARA ENERGY SOLUTIONS.",
    date: "July 12, 2026",
    readTime: "5 min read",
    author: "Solara Editorial Team",
    image: "https://res.cloudinary.com/dwjneqfb9/image/upload/v1783746288/WhatsApp_Image_2026-07-11_at_10.32.52_AM_fy7nog.jpg",
    seoTitle: "Solar Rooftop Systems in Assam | Complete Guide 2026 | Solara Energy Solutions",
    content: `
## Solar Rooftop Systems in Assam
Electricity costs in Assam continue to rise every year, making it increasingly expensive for homeowners, businesses, industries, educational institutions, hospitals, hotels, tea gardens, and commercial establishments to manage their monthly power bills. At the same time, Assam receives abundant sunlight throughout the year, making rooftop solar one of the smartest longterm investments for anyone looking to reduce electricity expenses while contributing to a cleaner environment. Whether you are planning to install a 3kW solar system for your home, a 5kW rooftop solar system, a 10kW commercial solar plant, or a large industrial solar power system, understanding how solar works is the first step toward making the right decision.

At SOLARA ENERGY SOLUTIONS, headquartered at AAC Commercial Complex, Athgaon, Guwahati, we provide complete turnkey solar EPC services across Assam—from consultation and system design to installation, net metering assistance, commissioning, and after-sales support. We also guide customers through the PM Surya Ghar Muft Bijli Yojana, helping eligible homeowners benefit from available government subsidies.

## Why Assam is an Excellent State for Solar Energy
Assam’s climate is often associated with heavy rainfall and lush greenery, but many people are surprised to learn that the state also receives sufficient annual solar radiation for efficient rooftop solar power generation. Modern high-efficiency solar panels generate electricity even under cloudy conditions. While peak production occurs on sunny days, today’s advanced technologies—such as N-Type TOPCon, Mono PERC, and Bifacial Solar Panels—are designed to perform efficiently in varying weather conditions, making them suitable for Assam’s environment.

Solar power is increasingly being adopted across:

- Residential homes
- Apartment buildings
- Schools and colleges
- Hospitals
- Hotels and resorts
- Shopping complexes
- Warehouses
- Rice mills
- Factories
- Manufacturing units
- Tea gardens
- Petrol pumps
- Government buildings
- Commercial offices

From Guwahati’s urban neighborhoods to rural villages across the state, rooftop solar is becoming a practical solution for reducing long-term electricity costs.

## Benefits of Installing a Solar Rooftop System
Installing a rooftop solar system offers multiple advantages beyond simply lowering your electricity bill.

**1. Significant Savings on Electricity Bills**

One of the biggest reasons customers choose solar is the ability to reduce monthly electricity expenses. Depending on system size, electricity consumption, and available rooftop space, many consumers can offset a substantial portion of their grid usage. For homes with higher electricity consumption, properly sized systems can provide considerable long-term savings over the system’s lifetime.

**2. Protection Against Future Electricity Tariff Increases**

Electricity tariffs generally increase over time due to rising fuel costs and infrastructure expenses. A rooftop solar system allows you to generate a significant portion of your own electricity, helping reduce dependence on future tariff increases.

**3. Environmentally Friendly Energy**

Solar energy is renewable and produces electricity without emitting greenhouse gases during operation. By installing solar, households and businesses contribute to cleaner energy generation while reducing dependence on conventional fossil-fuel-based electricity.

**4. Increased Property Value**

Properties equipped with professionally installed rooftop solar systems are often viewed as more energy-efficient and can be more attractive to prospective buyers who value lower operating costs.

**5. Low Maintenance Requirements**

Modern solar systems require relatively little maintenance. Routine cleaning, periodic inspections, and monitoring system performance are generally sufficient to keep the system operating efficiently for many years.

## Who Should Install Solar?
Solar is suitable for a wide variety of electricity consumers.

**1 Homeowners**

Families with moderate to high monthly electricity consumption can reduce long-term electricity costs while benefiting from government subsidy schemes where applicable. Popular residential capacities include:

- 2kW Solar System
- 3kW Solar System
- 5kW Solar System
- 6kW Solar System
- 10kW Solar System

**2 Commercial Establishments**

Businesses operating throughout the day often have substantial electricity requirements. Examples include:

- Retail stores
- Restaurants
- Hotels
- Shopping complexes
- Clinics
- Diagnostic centres
- Educational institutions
- Office buildings

**3 Industrial Consumers**

Industrial units generally have higher power consumption than residential users. Industries that commonly benefit from rooftop solar include:

- Rice mills
- Food processing plants
- Manufacturing units
- Warehouses
- Engineering workshops
- Packaging industries
- Textile facilities
- Pharmaceutical plants
- Cold storage units

Solar power helps industries reduce operating costs and improve long-term energy efficiency.

**4 Tea Gardens**

Tea is one of Assam’s most important industries. Tea estates often have substantial daytime electricity demand for offices, processing units, and associated facilities. Rooftop solar and ground-mounted solar systems can help offset part of this demand and reduce operating costs.

## Growing Solar Adoption Across Assam
Interest in solar energy has grown significantly across Assam as more consumers become aware of electricity savings, government incentives, and improved technology.

SOLARA ENERGY SOLUTIONS serves customers across numerous locations, including:

- Guwahati
- Jorhat
- Dibrugarh
- Tinsukia
- Sivasagar
- Golaghat
- Nagaon
- Tezpur
- Sonitpur
- Lakhimpur
- North Lakhimpur
- Dhemaji
- Morigaon
- Barpeta
- Bongaigaon
- Kokrajhar
- Dhubri
- Nalbari
- Mangaldoi
- Darrang
- Karimganj
- Hailakandi
- Cachar
- Silchar
- Biswanath
- Charaideo
- Majuli
- Baksa
- Chirang
- Udalguri
- Kamrup
- Kamrup Metropolitan
- Goalpara
- South Salmara-Mankachar
- West Karbi Anglong
- Karbi Anglong
- Dima Hasao

If your town or village is not listed above, you can still contact us. We evaluate projects across Assam based on site suitability and service availability.

## Common Google Searches About Solar in Assam
Many people begin their solar journey by searching online for answers to questions such as:

- Which is the best solar company in Assam?
- Which is the best rooftop solar company in Guwahati?
- How much does a 3kW solar system cost in Assam?
- What is the price of a 5kW solar system?
- How much government subsidy is available?
- How does net metering work in Assam?
- Is solar worth installing in Assam?
- Which solar panel brand is best?
- Which inverter should I choose?
- How long do solar panels last?

Throughout this guide, we will address these questions in detail to help you make informed decisions based on your specific energy needs.

## Why Choose SOLARA ENERGY SOLUTIONS?
Choosing the right solar EPC partner is just as important as selecting quality equipment. At SOLARA ENERGY SOLUTIONS, we focus on delivering complete rooftop solar solutions tailored to residential, commercial, and industrial requirements. Our services include:

- Free site assessment
- Customized system design
- Assistance with PM Surya Ghar Muft Bijli Yojana
- Support for net metering processes
- Professional installation
- High-quality solar panels and inverters
- Ongoing maintenance and after-sales service
- Transparent guidance throughout the project lifecycle

Our head office is located at:
**SOLARA ENERGY SOLUTIONS**, AAC Commercial Complex, Athgaon, Guwahati, Assam.

**Phone:** +91 9181016555

Whether you’re planning a small residential rooftop installation or a large commercial or industrial solar project, our team is committed to helping you find a solution that aligns with your energy requirements and long-term goals.
`
  }
];

export const parseMarkdownInline = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-bold text-[#1B4F8A]">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i} className="italic text-slate-500">{part.slice(1, -1)}</em>;
    }
    return part;
  });
};
